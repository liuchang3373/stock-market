package fullstack.stockmarket.stockprice.res;


import java.util.List;

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
public class StockPriceListResponse extends BaseResponse{
	private List<StockPriceDto> stockPriceListDto;
}
