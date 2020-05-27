package fullstack.stockmarket.user.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.common.api.ResultCode;
import fullstack.stockmarket.common.env.EnvConfig;
import fullstack.stockmarket.common.error.ServiceException;
import fullstack.stockmarket.crypto.Sign;
import fullstack.stockmarket.email.client.EmailClient;
import fullstack.stockmarket.email.res.EmailRequest;
import fullstack.stockmarket.user.UserConstant;
import fullstack.stockmarket.user.dto.UserDto;
import fullstack.stockmarket.user.model.User;
import fullstack.stockmarket.user.props.AppProps;
import fullstack.stockmarket.user.repo.UserRepo;

import static java.util.stream.Collectors.toList;

import java.net.URI;
import java.net.URISyntaxException;

@Service
public class UserService {
	@Autowired
	UserRepo userRepo;
	
	@Autowired
	ModelMapper modelMapper;
	
	@PersistenceContext
    EntityManager entityManager;
	
	@Autowired
    private AppProps appProps;
	
	@Autowired
    private EnvConfig envConfig;
	
	@Autowired
    private EmailClient emailClient;
	
	public List<UserDto> getAllusers() {
		List<User> users = userRepo.findAll();
		List<UserDto> usersDto = users.stream().map(user -> convertToDto(user)).collect(toList());
		return usersDto;
	}
	
	public UserDto getUserById(int id) {
		User user =  userRepo.findById(id).orElse(null);
		return this.convertToDto(user);
	}
	
	public UserDto getUserByEmail(String email) {
		User user = userRepo.findByEmail(email);
		if(user != null) {
			return this.convertToDto(user);
		}else {
			return null;
		}
		
	}
	
	public UserDto create(String name, String email, String phoneNumber, String password) {
		 if (StringUtils.hasText(email)) {
	            // Check to see if account exists
	            User foundUser = userRepo.findByEmail(email);
	            if (foundUser != null) {
	                throw new ServiceException("A user with that email already exists. Try a password reset");
	            }
	        }
        if (StringUtils.hasText(phoneNumber)) {
        	User foundUser = userRepo.findByPhoneNumber(phoneNumber);
            if (foundUser != null) {
                throw new ServiceException("A user with that phonenumber already exists. Try a password reset");
            }
        }
        // Column name/email/phone_number cannot be null
        if (name == null) {
            name = "";
        }
        if (email == null) {
            email = "";
        }
        if (phoneNumber == null) {
            phoneNumber = "";
        }
        
        User user = User.builder()
                .email(email).userName(name).phoneNumber(phoneNumber).passwordHash(password)
                .build();
        user.setPhotoUrl("test/photoUrl/" + email);
        user.setConfirmedAndActive(false);
        user.setAccessLevel((short) 2);
        try {
        	userRepo.save(user);
        } catch (Exception ex) {
            String errMsg = "Could not create user account";
            throw new ServiceException(errMsg, ex);
        }
        
        UserDto userDto = this.convertToDto(user);
        if (StringUtils.hasText(email)) {
            // Email confirmation

            String emailName = name;
            if (StringUtils.isEmpty(emailName)) {
                emailName = "there";
            }

            String subject = "Activate your stock-market account";
            this.sendEmail(userDto.getId(), email, emailName, subject, UserConstant.ACTIVATE_ACCOUNT_TMPL, true);
        }
        return userDto;
	}
	
	public UserDto update(UserDto newUserDto) {
        User newUser = this.convertToModel(newUserDto);

        User existingUser = userRepo.findUserById(newUser.getId());
        if (existingUser == null) {
            throw new ServiceException(ResultCode.NOT_FOUND, String.format("User with id %s not found", newUser.getId()));
        }
        entityManager.detach(existingUser);

        if (StringUtils.hasText(newUser.getEmail()) && !newUser.getEmail().equals(existingUser.getEmail())) {
            User foundUser = userRepo.findByEmail(newUser.getEmail());
            if (foundUser != null) {
                throw new ServiceException(ResultCode.REQ_REJECT, "A user with that email already exists. Try a password reset");
            }else {
            	existingUser.setEmail(newUser.getEmail());
            }
        }

        if (StringUtils.hasText(newUser.getPhoneNumber()) && !newUser.getPhoneNumber().equals(existingUser.getPhoneNumber())) {
        	User foundUser = userRepo.findByPhoneNumber(newUser.getPhoneNumber());
            if (foundUser != null) {
                throw new ServiceException(ResultCode.REQ_REJECT, "A user with that phonenumber already exists. Try a password reset");
            }else {
            	existingUser.setPhoneNumber(newUser.getPhoneNumber());
            }
        }
        
        if (StringUtils.hasText(newUser.getUserName()) && !newUser.getUserName().equals(existingUser.getUserName())) {
        	existingUser.setUserName(newUser.getUserName());
        }
        
        if (StringUtils.hasText(newUser.getPhotoUrl()) && !newUser.getPhotoUrl().equals(existingUser.getPhotoUrl())) {
        	existingUser.setPhotoUrl(newUser.getPhotoUrl());
        }
        
        if (StringUtils.hasText(newUser.getPasswordHash()) && !newUser.getPasswordHash().equals(existingUser.getPasswordHash())) {
        	existingUser.setPasswordHash(newUser.getPasswordHash());
        }
        
        existingUser.setAccessLevel(newUser.getAccessLevel());
        existingUser.setConfirmedAndActive(newUser.isConfirmedAndActive());
        
       
        try {
        	userRepo.save(existingUser);
        } catch (Exception ex) {
            String errMsg = "Could not update the user account";
            throw new ServiceException(errMsg, ex);
        }

        UserDto userDto = this.convertToDto(existingUser);
        return userDto;
    }
	
	public void deleteUser(int userId) {
        try {
            userRepo.deleteById(userId);;
        } catch (Exception ex) {
            String errMsg = "could not delete the admin";
        }
    }
	
	public UserDto verifyPassword(String email, String password) {
        User accountSecret = userRepo.findByEmail(email);
        if (accountSecret == null) {
            throw new ServiceException(ResultCode.NOT_FOUND, "account with specified email not found");
        }

        /*if (!accountSecret.isConfirmedAndActive()) {
            throw new ServiceException(ResultCode.REQ_REJECT, "This user has not confirmed their account");
        }*/

        if (StringUtils.isEmpty(accountSecret.getPasswordHash())) {
            throw new ServiceException(ResultCode.REQ_REJECT, "This user has not set up their password");
        }

        if (!password.equals(accountSecret.getPasswordHash())) {
            throw new ServiceException(ResultCode.UN_AUTHORIZED, "Incorrect password");
        }

        /*User account = accountRepo.findUserById(accountSecret.getId());
        if (account == null) {
            throw new ServiceException(String.format("User with id %s not found", accountSecret.getId()));
        }*/

        // You shall pass
        UserDto accountDto = this.convertToDto(accountSecret);
        return accountDto;
    }
	
	private UserDto convertToDto(User user) {
        return modelMapper.map(user, UserDto.class);
    }
	
	private User convertToModel(UserDto userDto) {
        return modelMapper.map(userDto, User.class);
    }
	
	public void sendEmail(int userId, String email, String name, String subject, String template, boolean activateOrConfirm) {
        String token = null;
        try {
            token = Sign.generateEmailConfirmationToken(userId, email, appProps.getSigningSecret());
        } catch(Exception ex) {
            String errMsg = "Could not create token";
            //serviceHelper.handleException(logger, ex, errMsg);
            throw new ServiceException(errMsg, ex);
        }

        String pathFormat = "/activate/%s";
        if (!activateOrConfirm) {
            pathFormat = "/reset/%s";
        }
        String path = String.format(pathFormat, token);
        URI link = null;
        String activateLink = "localhost:8761/user-svc" + path;
        try {
            link = new URI("http", "www." + envConfig.getExternalApex(), path, null);
        } catch (URISyntaxException ex) {
            String errMsg = "Could not create activation url";
            if (!activateOrConfirm) {
                errMsg = "Could not create reset url";
            }
            //serviceHelper.handleException(logger, ex, errMsg);
            throw new ServiceException(errMsg, ex);
        }

        String htmlBody = null;
        if (activateOrConfirm) { // active or confirm
            htmlBody = String.format(template, name, activateLink.toString(), activateLink.toString(), activateLink.toString());
        } else { // reset
            htmlBody = String.format(template, activateLink.toString(), activateLink.toString());
        }

        EmailRequest emailRequest = EmailRequest.builder()
                .to(email)
                .name(name)
                .subject(subject)
                .htmlBody(htmlBody)
                .build();

        BaseResponse baseResponse = null;
        try {
            baseResponse = emailClient.send(emailRequest);
        } catch (Exception ex) {
            String errMsg = "Unable to send email";
            //serviceHelper.handleException(logger, ex, errMsg);
            throw new ServiceException(errMsg, ex);
        }
        if (!baseResponse.isSuccess()) {
            //serviceHelper.handleError(logger, baseResponse.getMessage());
            throw new ServiceException(baseResponse.getMessage());
        }
    }

}
