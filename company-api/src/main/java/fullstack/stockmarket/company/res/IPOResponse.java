package fullstack.stockmarket.company.res;


import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.company.dto.IPODto;
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
public class IPOResponse extends BaseResponse{
	private IPODto ipoDetailDto;
}
