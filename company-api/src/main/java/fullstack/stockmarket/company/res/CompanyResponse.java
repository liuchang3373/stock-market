package fullstack.stockmarket.company.res;


import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.company.dto.CompanyDto;
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
public class CompanyResponse extends BaseResponse{
	private CompanyDto companyDto;
}
