package fullstack.stockmarket.company.res;


import java.util.List;

import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.company.dto.CompanyDto;
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
public class IPOListResponse extends BaseResponse{
	private List<IPODto> ipoListDto;
}
