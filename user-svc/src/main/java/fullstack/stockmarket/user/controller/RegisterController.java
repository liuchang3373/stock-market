package fullstack.stockmarket.user.controller;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonObject;

import fullstack.stockmarket.common.auth.Sessions;
import fullstack.stockmarket.common.env.EnvConfig;
import fullstack.stockmarket.user.dto.LoginUserDto;
import fullstack.stockmarket.user.dto.UserDto;
import fullstack.stockmarket.user.props.AppProps;
import fullstack.stockmarket.user.res.CreateUserRequest;
import fullstack.stockmarket.user.service.UserService;

@RestController
public class RegisterController {
	@Autowired
	UserService userService;
	@Autowired
    private AppProps appProps;
	
	@Autowired
    private EnvConfig envConfig;
	
	@PostMapping(value="/signup")
	public String singup(@RequestBody CreateUserRequest request, HttpServletResponse response) {
		String token = "";
		JsonObject tokenObject = new JsonObject();
		 if(request != null) {
			 UserDto userDto = userService.create(request.getFullName(), request.getEmail(), request.getPhoneNumber(), request.getPassword());
			 if(userDto != null) {
				 token = Sessions.loginUser(userDto.getId(),
						    userDto.getAccessLevel(),
						    userDto.getConfirmedAndActive(),
						 	false,
						 	appProps.getSigningSecret(),
						 	envConfig.getExternalApex(),
						 	response);
				System.out.print("token: " + token);
				tokenObject.addProperty("token", token);
				return tokenObject.toString();
			 }else {
				return tokenObject.toString();
			 }
		 }else {
			 return tokenObject.toString();
		 }
	}
}
