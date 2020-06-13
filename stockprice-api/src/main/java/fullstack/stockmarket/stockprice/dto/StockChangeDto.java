package fullstack.stockmarket.stockprice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StockChangeDto {
	private String x;
	
	private float low;
	
	private float high;
}
