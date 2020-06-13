package fullstack.stockmarket.stockprice.res;

import java.util.List;

import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.stockprice.dto.StockPriceDto;
import fullstack.stockmarket.stockprice.dto.TwoCompanyStockChangeDto;
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
public class TwoCompanyStockChangeResponse extends BaseResponse{
	private TwoCompanyStockChangeDto twoCompanyStockChangeDto;
}
