package fullstack.stockmarket.stockprice.dto;

import java.sql.Date;
import java.sql.Time;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StockPriceDto {
	
	private int id;
	
    private String companyCode;
	
	private String stockExchange;
	
	private float current;
	
	private float open;
	
	private float close;
	
	private float high;
	
	private float low;
	
	private float volume;
	
	private Date date;
	
}
