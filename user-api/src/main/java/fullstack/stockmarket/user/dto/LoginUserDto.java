package fullstack.stockmarket.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LoginUserDto {
	
	private String username;
	
	private String password;
	
	private boolean rememberMe;
}
