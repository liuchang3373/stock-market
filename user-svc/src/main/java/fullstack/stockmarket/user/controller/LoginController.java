package fullstack.stockmarket.user.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonObject;

import fullstack.stockmarket.common.auth.Sessions;
import fullstack.stockmarket.common.env.EnvConfig;
import fullstack.stockmarket.user.dto.LoginUserDto;
import fullstack.stockmarket.user.dto.UserDto;
import fullstack.stockmarket.user.props.AppProps;
import fullstack.stockmarket.user.service.UserService;

@RestController
public class LoginController {
	
	@Autowired
	UserService userService;
	
	@Autowired
    private EnvConfig envConfig;

    @Autowired
    private AppProps appProps;
	
    @RequestMapping(value = "/login")
    public String login(@RequestBody LoginUserDto loginUser, HttpServletResponse response) {
		System.out.println("=======loginUser: " + loginUser.toString());
		String email = "";
		String password = "";
		boolean rememberMe = false;
		JsonObject tokenObject = new JsonObject();
		String token = "";
		
		if(loginUser != null) {
			email = loginUser.getUsername();
			password = loginUser.getPassword();
			rememberMe = loginUser.isRememberMe();
		}
		UserDto verifyUserDto = null;
		try {
			verifyUserDto = userService.verifyPassword(email, password);
		}catch(Exception ex) {
			System.out.println(ex);
		}
		if(verifyUserDto != null) {
			token = Sessions.loginUser(verifyUserDto.getId(),
					 	verifyUserDto.getAccessLevel(),
					 	verifyUserDto.getConfirmedAndActive(),
					 	rememberMe,
					 	appProps.getSigningSecret(),
					 	envConfig.getExternalApex(),
					 	response);
			System.out.print("token: " + token);
			tokenObject.addProperty("token", token);
			return tokenObject.toString();
        }else {
        	return tokenObject.toString();
        }
    }
    
    @RequestMapping(value = "/getCookies",method = RequestMethod.GET)
    public String getCookie(HttpServletRequest request) {
    	Cookie[] cookies = request.getCookies();
    	List cookieName = new ArrayList();
    	if(cookies != null){
    		for(Cookie cookie : cookies){
	    		System.out.println("cookiename:" + cookie.getName());
	    		cookieName.add(cookie.getName());
    		}
    	}
    	return cookieName.toString();
    }
}
