package fullstack.stockmarket.company.dto;

import java.sql.Date;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class IPODto {
	
	private int id;
	
	private String companyName;
	
	private float pricePerShare;
	
	private float totalNumberShare;
	
	private Date openDateTime;
	
	private String remarks;
	
	private int sectorId;
	
	private int exchangeId;
}
