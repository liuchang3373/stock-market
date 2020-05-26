package fullstack.stockmarket.sector.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.sector.dto.SectorDto;
import fullstack.stockmarket.sector.res.SectorResponse;
import fullstack.stockmarket.sector.dto.SectorDto;
import fullstack.stockmarket.sector.model.Sector;
import fullstack.stockmarket.sector.res.SectorListResponse;
import fullstack.stockmarket.sector.res.SectorNameResponse;
import fullstack.stockmarket.sector.res.SectorResponse;
import fullstack.stockmarket.sector.service.SectorService;


@RestController
@RequestMapping("/sector")
public class SectorController {
	@Autowired
	SectorService sectorService;
	
	@GetMapping(path="/listAllSectors")
	public SectorListResponse getAllSectors() {
		List<SectorDto> SectorDtoList = sectorService.getSectorDtoList();
		SectorListResponse sectorListResponse = new SectorListResponse(SectorDtoList);
		return sectorListResponse;
	}
	
	@GetMapping(path="/getSectorById")
	public SectorResponse getSectorById(@RequestParam int id) {
		SectorDto sectorDto = sectorService.getSectorDtoById(id);
		SectorResponse sectorResponse = new SectorResponse(sectorDto);
		return sectorResponse;
	}
	
	@GetMapping(path="/getSectorNameById")
	public SectorNameResponse getSectorNameById(@RequestParam int id) {
		String sectorName = sectorService.getSectorNameById(id);
		SectorNameResponse sectorNameResponse = new SectorNameResponse(sectorName);
		return sectorNameResponse;
	}
	
	@PostMapping(path = "/create")
    public SectorResponse createSector(@RequestBody SectorDto sectorDto) {
        SectorDto newSectorDto = sectorService.createSector(sectorDto);
        return new SectorResponse(newSectorDto);
    }
	
	@PutMapping(path= "/update")
    public SectorResponse updateSector(@RequestBody SectorDto sectorDto) {
        SectorDto updatedSectorDto = sectorService.updateSector(sectorDto);
        return new SectorResponse(updatedSectorDto);
    }
	
	@DeleteMapping(path = "/delete")
    public BaseResponse deleteSector(@RequestParam int sectorId) {
		sectorService.deleteSector(sectorId);
        return BaseResponse.builder().build();
    }
	
	@PostMapping(path= "/createOrUpdate")
    public SectorResponse createOrUpdateSector(@RequestBody SectorDto sectorDto) {
		Sector exsitSector = sectorService.getSectorById(sectorDto.getId());
		if(exsitSector != null) {
			 SectorDto updatedSectorDto = sectorService.updateSector(sectorDto);
			 return new SectorResponse(updatedSectorDto);
		}else {
			SectorDto newSectorDto = sectorService.createSector(sectorDto);
			 return new SectorResponse(newSectorDto);
		}
    }
}
