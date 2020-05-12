package fullstack.stockmarket.user.client;
import java.util.List;

import javax.validation.Valid;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.user.UserConstant;
import fullstack.stockmarket.user.dto.UserDto;
import fullstack.stockmarket.user.res.CreateUserRequest;
import fullstack.stockmarket.user.res.UserListResponse;
import fullstack.stockmarket.user.res.UserResponse;


@FeignClient(name = UserConstant.SERVICE_NAME, path = "/user", url = "${stock.user-service-endpoint}")
public interface UserClient {
	
	@GetMapping(path="/listAllUsers")
	public UserListResponse getAllusers();
	
	@GetMapping(path="/getUserById")
	public UserResponse getUserById(@RequestParam int id);
	
	@GetMapping(path="/getUserByEmail")
	public UserResponse getUserByEmail(@RequestParam String email);
	
	@PostMapping(path = "/create") 
	public UserResponse createUser(@RequestBody @Valid CreateUserRequest request);
	
	@PutMapping(path = "/update")
    public UserResponse updateUser(@RequestBody @Valid UserDto newUserDto);
	
	@DeleteMapping(path = "/delete")
    public BaseResponse deleteAdmin(@RequestParam int userId);
}
