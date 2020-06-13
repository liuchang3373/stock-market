package fullstack.stockmarket.stockprice.dto;

import java.sql.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TwoCompanyStockChangeDto {
	List<StockChangeDto> company1;
	List<StockChangeDto> company2;
}
