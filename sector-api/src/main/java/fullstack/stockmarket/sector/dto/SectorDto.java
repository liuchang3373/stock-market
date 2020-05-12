package fullstack.stockmarket.sector.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SectorDto {
	
	private int id;
	
	private String sectorName;
	
	private String brief;
}
