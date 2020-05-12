package fullstack.stockmarket.sector.res;


import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.sector.dto.SectorDto;
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
public class SectorResponse extends BaseResponse{
	private SectorDto sectorDto;
}
