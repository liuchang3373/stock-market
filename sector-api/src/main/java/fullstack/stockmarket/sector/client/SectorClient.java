package fullstack.stockmarket.sector.client;
import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.sector.SectorConstant;
import fullstack.stockmarket.sector.dto.SectorDto;
import fullstack.stockmarket.sector.res.SectorListResponse;
import fullstack.stockmarket.sector.res.SectorNameResponse;
import fullstack.stockmarket.sector.res.SectorResponse;


@FeignClient(name = SectorConstant.SERVICE_NAME, path = "/sector", url = "${stock.sector-service-endpoint}")
public interface SectorClient {
	
	@GetMapping(path="/listAllSectors")
	SectorListResponse getAllSectors();
	
	
	@GetMapping(path="/getSectorById")
	SectorResponse getSectorById(@RequestParam int id);
	
	@GetMapping(path="/getSectorNameById")
	SectorNameResponse getSectorNameById(@RequestParam int id);
	
	@PostMapping(path = "/create")
    SectorResponse createSector(@RequestBody SectorDto sectorDto);
	
	@PutMapping(path= "/update")
    SectorResponse updateSector(@RequestBody SectorDto sectorDto);
	
	@DeleteMapping(path = "/delete")
    BaseResponse deleteSector(@RequestParam int sectorId);
}
