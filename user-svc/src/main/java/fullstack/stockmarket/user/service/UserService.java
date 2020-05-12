package fullstack.stockmarket.user.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import fullstack.stockmarket.common.api.ResultCode;
import fullstack.stockmarket.common.error.ServiceException;
import fullstack.stockmarket.user.dto.UserDto;
import fullstack.stockmarket.user.model.User;
import fullstack.stockmarket.user.repo.UserRepo;

import static java.util.stream.Collectors.toList;

@Service
public class UserService {
	@Autowired
	UserRepo userRepo;
	
	@Autowired
	ModelMapper modelMapper;
	
	@PersistenceContext
    EntityManager entityManager;
	
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
		return this.convertToDto(user);
	}
	
	public UserDto create(String name, String email, String phoneNumber) {
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
                .email(email).userName(name).phoneNumber(phoneNumber)
                .build();
        user.setPhotoUrl("test/photoUrl/" + email);
        try {
        	userRepo.save(user);
        } catch (Exception ex) {
            String errMsg = "Could not create user account";
            throw new ServiceException(errMsg, ex);
        }
        
        UserDto userDto = this.convertToDto(user);
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
        
        if (newUser.getAccessLevel() != 0 && newUser.getAccessLevel() != existingUser.getAccessLevel()) {
        	existingUser.setAccessLevel(newUser.getAccessLevel());
        }
        
       
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
	
	private UserDto convertToDto(User user) {
        return modelMapper.map(user, UserDto.class);
    }
	
	private User convertToModel(UserDto userDto) {
        return modelMapper.map(userDto, User.class);
    }

}
