package fullstack.stockmarket.company.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CompanyDto {
	private int id;
	
	private String companyCode;
	
	private String companyName;
	
	private float turnOver;
	
	private String ceoName;
	
	private String boardDirector;
	
	private String brief;
	
	private int sectorId;
	
	private int exchangeId;
	
	private String sectorName;
	
	private String exchangeName;
}
