package fullstack.stockmarket.company.service;

import static java.util.stream.Collectors.toList;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import fullstack.stockmarket.common.api.ResultCode;
import fullstack.stockmarket.common.error.ServiceException;
import fullstack.stockmarket.company.dto.CompanyDto;
import fullstack.stockmarket.company.dto.IPODto;
import fullstack.stockmarket.company.model.Company;
import fullstack.stockmarket.company.model.IPO;

import fullstack.stockmarket.company.repo.IPORepo;


@Service
public class IPOService {
	@Autowired
	IPORepo ipoRepo;
	
	@Autowired
	ModelMapper modelMapper;
	
	@PersistenceContext
	EntityManager entityManager;
	
	public IPODto createIPO(IPODto ipoDto) {
		IPO ipo = this.convertToModel(ipoDto);
	
        IPO savedIPO = null;
        try {
        	savedIPO = ipoRepo.save(ipo);
        } catch (Exception ex) {
            String errMsg = "could not create ipo";
        }

        return this.convertToDto(savedIPO);
    }
	
	public IPODto updateIPO(IPODto ipoDto) {
        IPO existingIPO = ipoRepo.findById(ipoDto.getId());
        if (existingIPO == null) {
            throw new ServiceException(ResultCode.NOT_FOUND, "IPO not found");
        }
        entityManager.detach(existingIPO);

        IPO newIPO = this.convertToModel(ipoDto);
        
        if (StringUtils.hasText(newIPO.getCompanyName()) && !newIPO.getCompanyName().equals(existingIPO.getCompanyName())) {
        	IPO ipo = ipoRepo.findByCompanyName(newIPO.getCompanyName());
            if (ipo != null) {
                throw new ServiceException(ResultCode.REQ_REJECT, "A ipo with that company name already exists.");
            }else {
            	existingIPO.setCompanyName(newIPO.getCompanyName());
            }
        }

        if (StringUtils.hasText(newIPO.getRemarks()) && !newIPO.getRemarks().equals(existingIPO.getRemarks())) {
            existingIPO.setRemarks(newIPO.getRemarks());
        }
        
        if (newIPO.getExchangeId() != 0 && newIPO.getExchangeId() != existingIPO.getExchangeId()) {
        	existingIPO.setExchangeId(newIPO.getExchangeId());
        }
        
        if (newIPO.getSectorId() != 0 && newIPO.getSectorId() != existingIPO.getSectorId()) {
        	existingIPO.setSectorId(newIPO.getSectorId());
        }
        
        if (newIPO.getPricePerShare() != 0 && newIPO.getPricePerShare() != existingIPO.getPricePerShare()) {
        	existingIPO.setPricePerShare(newIPO.getPricePerShare());
        }
        
        if (newIPO.getTotalNumberShare() != 0 && newIPO.getTotalNumberShare() != existingIPO.getTotalNumberShare()) {
        	existingIPO.setTotalNumberShare(newIPO.getTotalNumberShare());
        }
        
        if (newIPO.getOpenDateTime() != null && !newIPO.getOpenDateTime().equals(existingIPO.getOpenDateTime())) {
            existingIPO.setOpenDateTime(newIPO.getOpenDateTime());
        }
        
        
        IPO updatedIPO = null;
        try {
        	updatedIPO = ipoRepo.save(existingIPO);
        } catch (Exception ex) {
            String errMsg = "could not update the IPODto";
        }
        
        return this.convertToDto(existingIPO);
    }
	
	public List<IPODto> getAllIPOs() {
		List<IPO> ipos = ipoRepo.findAll();
		List<IPODto> iposDto = ipos.stream().map(ipo -> convertToDto(ipo)).collect(toList());
		return iposDto;
	}
	
	public IPODto getIPOById(int id) {
		IPO ipo = ipoRepo.findById(id);
		return this.convertToDto(ipo);
	}
	
	public void deleteIPO(int id) {
        try {
        	ipoRepo.deleteById(id);;
        } catch (Exception ex) {
            String errMsg = "could not delete the ipo";
        }
    }
	
	private IPODto convertToDto(IPO ipo) {
        return modelMapper.map(ipo, IPODto.class);
    }

    private IPO convertToModel(IPODto ipoDto) {
        return modelMapper.map(ipoDto, IPO.class);
    }
}
