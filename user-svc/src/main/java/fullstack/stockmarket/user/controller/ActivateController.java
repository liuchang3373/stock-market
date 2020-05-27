package fullstack.stockmarket.user.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.auth0.jwt.interfaces.DecodedJWT;

import fullstack.stockmarket.common.auth.Sessions;
import fullstack.stockmarket.common.env.EnvConfig;
import fullstack.stockmarket.crypto.Sign;
import fullstack.stockmarket.user.dto.UserDto;
import fullstack.stockmarket.user.props.AppProps;
import fullstack.stockmarket.user.service.UserService;

@RestController
public class ActivateController {
	@Autowired
	UserService userService;
	
	@Autowired
    private EnvConfig envConfig;

    @Autowired
    private AppProps appProps;
    
    @RequestMapping(value = "/activate/{token}")
    public void activate(@PathVariable String token,
                           @RequestParam(value="password", required = false) String password,
                           @RequestParam(value="name", required = false) String name,
                           @RequestParam(value="tos", required = false) String tos,
                           @RequestParam(value="phonenumber", required = false) String phonenumber,
                           HttpServletRequest request,
                           HttpServletResponse response) {
    	
    	String email = null;
        String userId = null;
        System.out.println("token: " + token);
        
        DecodedJWT jwt = Sign.verifyEmailConfirmationToken(token, appProps.getSigningSecret());
        email = jwt.getClaim(Sign.CLAIM_EMAIL).asString();
        userId = jwt.getClaim(Sign.CLAIM_USER_ID).asString();
        
        System.out.println("email: " + email);
        UserDto userDto = userService.getUserByEmail(email);
        System.out.println("userDto: " + userDto);
        userDto.setConfirmedAndActive(1);
        try {
        	userDto = userService.update(userDto);
        }catch(Exception ex) {
        	System.out.println("fail to update user account");
        }
        if(userDto != null) {
        	Sessions.loginUser(userDto.getId(),
        			userDto.getAccessLevel(),
        			userDto.getConfirmedAndActive(),
				 	true,
				 	appProps.getSigningSecret(),
				 	envConfig.getExternalApex(),
				 	response);
        }
        String msg = "";
        if(userDto.getConfirmedAndActive() == 1) {
        	msg = "Your account has already activated, you can login now!";
        	try {
        		response.sendRedirect("http://localhost:4200/auth/confirm?message=" + msg);
        	}catch(Exception ex) {
            	System.out.println("fail to redirect");
            }
        }else {
        	msg = "An error occured in account activate, please re-activate, thanks";
        	try {
        		response.sendRedirect("http://localhost:4200/auth/confirm?message=" + msg);
        	}catch(Exception ex) {
            	System.out.println("fail to redirect");
            }
        }
        
    }
}
