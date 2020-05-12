package fullstack.stockmarket.exchange.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ExchangeDto {
	
	private int id;
	
	private String exchangeName;
	
	private String contactAddress;
	
	private String remarks;
	
	private String brief;
}
