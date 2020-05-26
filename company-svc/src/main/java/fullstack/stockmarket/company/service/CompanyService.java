package fullstack.stockmarket.company.service;

import java.util.ArrayList;
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
import fullstack.stockmarket.company.model.Company;
import fullstack.stockmarket.company.repo.CompanyRepo;
import fullstack.stockmarket.exchange.client.ExchangeClient;
import fullstack.stockmarket.exchange.dto.ExchangeDto;
import fullstack.stockmarket.exchange.res.ExchangeListResponse;
import fullstack.stockmarket.sector.client.SectorClient;
import fullstack.stockmarket.sector.dto.SectorDto;
import fullstack.stockmarket.sector.res.SectorListResponse;

@Service
public class CompanyService {
	@Autowired
	CompanyRepo companyRepo;
	
	@Autowired
	ExchangeClient exchangeClient;
	
	@Autowired
	SectorClient sectorClient;
	
	 @Autowired
	 ModelMapper modelMapper;
	 
	 @PersistenceContext
	 EntityManager entityManager;
	
	public CompanyDto createCompany(CompanyDto companyDto) {
        Company company = this.convertToModel(companyDto);

        Company savedCompany = null;
        try {
            savedCompany = companyRepo.save(company);
        } catch (Exception ex) {
            String errMsg = "could not create company";
        }

        return this.convertToDto(savedCompany);
    }
	
	public CompanyDto updateCompany(CompanyDto companyDto) {
        Company existingCompany = companyRepo.findById(companyDto.getId());
        if (existingCompany == null) {
            throw new ServiceException(ResultCode.NOT_FOUND, "Company not found");
        }
        entityManager.detach(existingCompany);

        Company newCompany = this.convertToModel(companyDto);
        
        if (StringUtils.hasText(newCompany.getCompanyCode()) && !newCompany.getCompanyCode().equals(existingCompany.getCompanyCode())) {
        	Company company = companyRepo.findByCompanyCode(newCompany.getCompanyCode());
            if (company != null) {
                throw new ServiceException(ResultCode.REQ_REJECT, "A company with that company code already exists.");
            }else {
            	existingCompany.setCompanyCode(newCompany.getCompanyCode());
            }
        }

        if (StringUtils.hasText(newCompany.getCompanyName()) && !newCompany.getCompanyName().equals(existingCompany.getCompanyName())) {
        	Company company = companyRepo.findByCompanyName(newCompany.getCompanyName());
            if (company != null) {
                throw new ServiceException(ResultCode.REQ_REJECT, "A company with that company Name already exists.");
            }else {
            	existingCompany.setCompanyName(newCompany.getCompanyName());
            }
        }
        
        if (StringUtils.hasText(newCompany.getCeoName()) && !newCompany.getCeoName().equals(existingCompany.getCeoName())) {
        	existingCompany.setCeoName(newCompany.getCeoName());
        }
        
        if (StringUtils.hasText(newCompany.getBrief()) && !newCompany.getBrief().equals(existingCompany.getBrief())) {
        	existingCompany.setBrief(newCompany.getBrief());
        }
        
        if (StringUtils.hasText(newCompany.getBoardDirector()) && !newCompany.getBoardDirector().equals(existingCompany.getBoardDirector())) {
        	existingCompany.setBoardDirector(newCompany.getBoardDirector());
        }
        
        if (newCompany.getExchangeId() != 0 && newCompany.getExchangeId() != existingCompany.getExchangeId()) {
        	existingCompany.setExchangeId(newCompany.getExchangeId());
        }
        
        if (newCompany.getSectorId() != 0 && newCompany.getSectorId() != existingCompany.getSectorId()) {
        	existingCompany.setSectorId(newCompany.getSectorId());
        }
        
        if (newCompany.getTurnOver() != 0 && newCompany.getTurnOver() != existingCompany.getTurnOver()) {
        	existingCompany.setTurnOver(newCompany.getTurnOver());
        }
        
        Company updatedCompany = null;
        try {
            updatedCompany = companyRepo.save(existingCompany);
        } catch (Exception ex) {
            String errMsg = "could not update the companyDto";
        }
        
        return this.convertToDto(existingCompany);
    }
	
	public List<CompanyDto> getCompanyListDto() {
		List<Company> companies = getAllCompanies();
		
		List<CompanyDto> companiesDto = new ArrayList<CompanyDto>();
		List<ExchangeDto> exchangesDto = getExchangeListResponse().getExchangeListDto();
		List<SectorDto> sectorsDto = getSectorListResponse().getSectorListDto();
		
		for(int i = 0; i < companies.size(); i++) {
			CompanyDto companyDto = new CompanyDto();
			for(int j = 0; j < exchangesDto.size(); j++) {
				if(companies.get(i).getExchangeId() == exchangesDto.get(j).getId()) {
					companyDto.setExchangeId(exchangesDto.get(j).getId());
					companyDto.setExchangeName(exchangesDto.get(j).getExchangeName());
				}
			}
			for(int j = 0; j < sectorsDto.size(); j++) {
				if(companies.get(i).getSectorId() == sectorsDto.get(j).getId()) {
					companyDto.setSectorId(sectorsDto.get(j).getId());
					companyDto.setSectorName(sectorsDto.get(j).getSectorName());
				}
			}
			companyDto.setId(companies.get(i).getId());
			companyDto.setCompanyName(companies.get(i).getCompanyName());
			companyDto.setCompanyCode(companies.get(i).getCompanyCode());
			companyDto.setCeoName(companies.get(i).getCeoName());
			companyDto.setBoardDirector(companies.get(i).getBoardDirector());
			companyDto.setTurnOver(companies.get(i).getTurnOver());
			companyDto.setBrief(companies.get(i).getBrief());
			
			companiesDto.add(companyDto);
		}
		return companiesDto;
	}
	
	public List<Company> getAllCompanies() {
		List<Company> companies = companyRepo.findAll();
		return companies;
	}
	
	public CompanyDto getCompanyByCompanyCode(String companyCode) {
		Company company = companyRepo.findByCompanyCode(companyCode);
		return this.convertToDto(company);
	}
	
	public Company getCompanyByCompanyId(int id) {
		Company company = companyRepo.findById(id);
		return company;
	}
	
	public void deleteCompany(int id) {
        try {
        	companyRepo.deleteById(id);;
        } catch (Exception ex) {
            String errMsg = "could not delete the company";
        }
    }
	
	private ExchangeListResponse getExchangeListResponse() {
		ExchangeListResponse exchangeListResponse = null;
		try {
			exchangeListResponse = exchangeClient.getAllExchanges();
		}catch (Exception ex) {
            String errMsg = "unable to get exchange";
            handleErrorAndThrowException(ex, errMsg);
        }
        if (!exchangeListResponse.isSuccess()) {
            handleErrorAndThrowException(exchangeListResponse.getMessage());
        }
        return exchangeListResponse;
	}
	
	private SectorListResponse getSectorListResponse() {
		SectorListResponse sectorListResponse = null;
		try {
			sectorListResponse = sectorClient.getAllSectors();
		}catch (Exception ex) {
            String errMsg = "unable to get sector";
            handleErrorAndThrowException(ex, errMsg);
        }
        if (!sectorListResponse.isSuccess()) {
            handleErrorAndThrowException(sectorListResponse.getMessage());
        }
        return sectorListResponse;
	}
	
	public void handleErrorAndThrowException(String errMsg) {
        //logger.error(errMsg);
        throw new ServiceException(errMsg);
    }

    public void handleErrorAndThrowException(Exception ex, String errMsg) {
        //logger.error(errMsg, ex);
        throw new ServiceException(errMsg, ex);
    }
    
    private CompanyDto convertToDto(Company company) {
        return modelMapper.map(company, CompanyDto.class);
    }

    private Company convertToModel(CompanyDto companyDto) {
        return modelMapper.map(companyDto, Company.class);
    }
    
}
