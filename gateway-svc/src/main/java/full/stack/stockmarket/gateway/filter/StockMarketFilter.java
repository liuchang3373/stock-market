package full.stack.stockmarket.gateway.filter;

import java.util.Arrays;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;

import fullstack.stockmarket.common.auth.AuthConstant;
import fullstack.stockmarket.common.auth.Sessions;
import fullstack.stockmarket.crypto.Sign;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
public class StockMarketFilter extends ZuulFilter{
	
	@Autowired
	private static Sessions sessions;
	
	@Autowired
	private static Sign sign;
	
    private String signingSecret = "123";
	
	
	@Override
    public String filterType() {
        return "pre";
    }
 
    @Override
    public int filterOrder() {
        return 0;
    }
 
    @Override
    public boolean shouldFilter() {
        return true;
    }
 
    @Override
    public Object run() {
        RequestContext ctx = RequestContext.getCurrentContext();
        HttpServletRequest request = ctx.getRequest();
        String authorization = AuthConstant.AUTHORIZATION_ANONYMOUS_WEB;
        Session session = this.getSession(request);
        if (session != null) {
            if (session.accessLevel == 1) {
                authorization = AuthConstant.AUTHORIZATION_ADMIN_USER;
            } else if(session.accessLevel == 2) {
                authorization = AuthConstant.AUTHORIZATION_AUTHENTICATED_USER;
            }else {
            	authorization = AuthConstant.ERROR_MSG_DO_NOT_HAVE_ACCESS;
            }
            ctx.addZuulRequestHeader(AuthConstant.CURRENT_USER_HEADER, session.getUserId());
            //headers.set(AuthConstant.CURRENT_USER_HEADER, session.getUserId());
        } else {
            // prevent hacking
        	//ctx.clear();
        }
        ctx.addZuulRequestHeader(AuthConstant.AUTHORIZATION_HEADER, authorization);
        
        HttpServletResponse response = ctx.getResponse();
        response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH");
        response.setHeader("Access-Control-Allow-Headers", "x-access-token, content-type");
        response.setHeader("Access-Control-Expose-Headers", "X-forwared-port, X-forwarded-host");
        response.setHeader("Vary", "Origin,Access-Control-Request-Method,Access-Control-Request-Headers");
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            ctx.setSendZuulResponse(false); 
            ctx.setResponseStatusCode(HttpStatus.OK.value());
            return null;
        }
        ctx.setSendZuulResponse(true); 
        ctx.setResponseStatusCode(HttpStatus.OK.value());
        return authorization;
    }
    
    private Session getSession(HttpServletRequest request) {
        String token = sessions.getToken(request);
        if (token == null) return null;
        try {
            DecodedJWT decodedJWT = sign.verifySessionToken(token, signingSecret);
            String userId = decodedJWT.getClaim(Sign.CLAIM_USER_ID).asString();
            int accessLevel = decodedJWT.getClaim(Sign.ACCESS_LEVEL).asInt();
            Session session = Session.builder().userId(userId).accessLevel(accessLevel).build();
            return session;
        } catch (Exception e) {
            //log.error("fail to verify token", "token", token, e);
            return null;
        }
    }
    
    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    private static class Session {
        private String userId;
        private int accessLevel;
    }
}
