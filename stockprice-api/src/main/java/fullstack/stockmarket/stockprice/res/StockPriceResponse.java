package fullstack.stockmarket.stockprice.res;


import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.stockprice.dto.StockPriceDto;
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
public class StockPriceResponse extends BaseResponse{
	private StockPriceDto stockPriceDto;
}
