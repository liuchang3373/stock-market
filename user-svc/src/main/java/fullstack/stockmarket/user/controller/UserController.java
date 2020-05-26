package fullstack.stockmarket.user.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.common.auth.AuthConstant;
import fullstack.stockmarket.common.auth.Authorize;
import fullstack.stockmarket.user.dto.UserDto;
import fullstack.stockmarket.user.model.User;
import fullstack.stockmarket.user.res.CreateUserRequest;
import fullstack.stockmarket.user.res.UserListResponse;
import fullstack.stockmarket.user.res.UserResponse;
import fullstack.stockmarket.user.service.UserService;


@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService userService;
	
	@GetMapping(path="/listAllUsers")
	//@Authorize(value = {AuthConstant.AUTHORIZATION_AUTHENTICATED_USER})
	public UserListResponse getAllusers() {
		List<UserDto> userListDto = userService.getAllusers();
		UserListResponse userListResponse = new UserListResponse(userListDto);
		return userListResponse;
	}
	
	@GetMapping(path="/getUserById")
	public UserResponse getUserById(@RequestParam int id) {
		UserResponse userResponse = new UserResponse(userService.getUserById(id));
	    return userResponse;
	}
	
	@GetMapping(path="/getUserByEmail")
	public UserResponse getUserByEmail(@RequestParam String email) {
		UserResponse userResponse = new UserResponse(userService.getUserByEmail(email));
	    return userResponse;
	}
	
	@PostMapping(path = "/create") 
	public UserResponse createUser(@RequestBody @Valid CreateUserRequest request) {
	    UserDto userDto = userService.create(request.getFullName(), request.getEmail(), request.getPhoneNumber(), request.getPassword());
	    UserResponse userResponse = new UserResponse(userDto);
	    return userResponse;
	}
	
	@PutMapping(path = "/update")
    public UserResponse updateUser(@RequestBody @Valid UserDto newUserDto) {
        UserDto UserDto =  userService.update(newUserDto);
        UserResponse userResponse = new UserResponse(UserDto);
        return userResponse;
    }
	
	@DeleteMapping(path = "/delete")
    public BaseResponse deleteAdmin(@RequestParam int userId) {
		userService.deleteUser(userId);
        return BaseResponse.builder().build();
    }
	
	@PostMapping(path= "/createOrUpdate")
    public UserResponse createOrUpdateUser(@RequestBody UserDto userDto) {
		UserDto exsitUser = userService.getUserById(userDto.getId());
		if(exsitUser != null) {
			 UserDto updatedUserDto = userService.update(userDto);
			 return new UserResponse(updatedUserDto);
		}else {
			 UserDto newUserDto = userService.create(userDto.getUserName(), userDto.getEmail(), userDto.getPhoneNumber(), userDto.getPasswordHash());
			 return new UserResponse(newUserDto);
		}
    }
}
