package fullstack.stockmarket.sector.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import fullstack.stockmarket.common.api.ResultCode;
import fullstack.stockmarket.common.error.ServiceException;
import fullstack.stockmarket.sector.dto.SectorDto;
import fullstack.stockmarket.sector.model.Sector;
import fullstack.stockmarket.sector.repo.SectorRepo;

@Service
public class SectorService {
	@Autowired
	SectorRepo sectorRepo;
	
	@Autowired
	ModelMapper modelMapper;
	
	@PersistenceContext
	EntityManager entityManager;
	
	public SectorDto createSector(SectorDto sectorDto) {
       Sector sector = this.convertToModel(sectorDto);

       Sector savedSector = null;
       try {
           savedSector = sectorRepo.save(sector);
       } catch (Exception ex) {
           String errMsg = "could not create sector";
       }

       return this.convertToDto(savedSector);
    }
	
	public SectorDto updateSector(SectorDto sectorDto) {
        Sector existingSector = sectorRepo.findById(sectorDto.getId()).orElse(null);
        if (existingSector == null) {
            throw new ServiceException(ResultCode.NOT_FOUND, "Sector not found");
        }
        entityManager.detach(existingSector);

        Sector newSector = this.convertToModel(sectorDto);
        
        if (StringUtils.hasText(newSector.getBrief()) && !newSector.getBrief().equals(existingSector.getBrief())) {
            existingSector.setBrief(newSector.getBrief());
        }

        if (StringUtils.hasText(newSector.getSectorName()) && !newSector.getSectorName().equals(existingSector.getSectorName())) {
        	Sector sector = sectorRepo.findBySectorName(newSector.getSectorName());
            if (sector != null) {
                throw new ServiceException(ResultCode.REQ_REJECT, "A sector with that sector Name already exists.");
            }else {
            	existingSector.setSectorName(newSector.getSectorName());
            }
        }
        
        Sector updatedSector = null;
        try {
            updatedSector = sectorRepo.save(existingSector);
        } catch (Exception ex) {
            String errMsg = "could not update the sectorDto";
        }
        
        return this.convertToDto(existingSector);
    }
	
	public void deleteSector(int id) {
        try {
        	sectorRepo.deleteById(id);;
        } catch (Exception ex) {
            String errMsg = "could not delete the sector";
        }
    }
	
	public List<SectorDto> getSectorDtoList() {
		return convertToDtoList(getAllSectors());
	}
	
	public SectorDto getSectorDtoById(int id) {
		return convertToDto(getSectorById(id));
	}
	
	
	public List<Sector> getAllSectors() {
		return sectorRepo.findAll();
	}
	
	public Sector getSectorById(int id) {
		return sectorRepo.findById(id).orElse(null);
	}
	
	public String getSectorNameById(int id) {
		Sector sector =  sectorRepo.findById(id).orElse(null);
		return sector !=null ? sector.getSectorName() : "";
	}
	
	private SectorDto convertToDto(Sector sector) {
        return modelMapper.map(sector, SectorDto.class);
    }
	
	private Sector convertToModel(SectorDto sectorDto) {
        return modelMapper.map(sectorDto, Sector.class);
    }
	
	private List<SectorDto> convertToDtoList(List<Sector> sectorList) {
		List<SectorDto> sectorDtoList = new ArrayList<SectorDto>();
        for(int i = 0; i < sectorList.size(); i++) {
        	sectorDtoList.add(convertToDto(sectorList.get(i)));
        }
        return sectorDtoList;
    }
	
}
