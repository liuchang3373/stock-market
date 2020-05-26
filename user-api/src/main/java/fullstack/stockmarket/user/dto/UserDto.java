package fullstack.stockmarket.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {
	
    private int id;
	
	private String email;
	
	private String userName;
	
	private String phoneNumber;
	
	private int confirmedAndActive;
	
	private String passwordHash;
	
	private int accessLevel;
	
	private String photoUrl;
}
