package fullstack.stockmarket.user.res;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.util.StringUtils;

import fullstack.stockmarket.common.validation.PhoneNumber;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Email;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateUserRequest {

    private String name;
    @Email(message = "Invalid email")
    private String email;
    @PhoneNumber
    private String phoneNumber;

    @AssertTrue(message = "Empty request")
    private boolean isValidRequest() {
        return StringUtils.hasText(name) || StringUtils.hasText(email) || StringUtils.hasText(phoneNumber);
    }

}
