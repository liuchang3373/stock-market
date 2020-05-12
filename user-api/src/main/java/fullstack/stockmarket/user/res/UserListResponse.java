package fullstack.stockmarket.user.res;


import java.util.List;

import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.user.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(callSuper = true)
public class UserListResponse extends BaseResponse{
	private List<UserDto> userListDto;
}
