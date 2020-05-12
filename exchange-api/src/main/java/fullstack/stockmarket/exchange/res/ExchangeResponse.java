package fullstack.stockmarket.exchange.res;


import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.exchange.dto.ExchangeDto;
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
public class ExchangeResponse extends BaseResponse{
	private ExchangeDto exchangeDto;
}
