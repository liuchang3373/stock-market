package fullstack.stockmarket.exchange.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import fullstack.stockmarket.common.api.ResultCode;
import fullstack.stockmarket.common.error.ServiceException;
import fullstack.stockmarket.exchange.dto.ExchangeDto;
import fullstack.stockmarket.exchange.model.Exchange;
import fullstack.stockmarket.exchange.dto.ExchangeDto;
import fullstack.stockmarket.exchange.model.Exchange;
import fullstack.stockmarket.exchange.repo.ExchangeRepo;
import org.modelmapper.ModelMapper;

@Service
public class ExchangeService {
	@Autowired
	ExchangeRepo exchangeRepo;
	
	@Autowired
	ModelMapper modelMapper;
	
	@PersistenceContext
	EntityManager entityManager;
	
	public ExchangeDto createExchange(ExchangeDto exchangeDto) {
       Exchange exchange = this.convertToModel(exchangeDto);

       Exchange savedExchange = null;
       try {
           savedExchange = exchangeRepo.save(exchange);
       } catch (Exception ex) {
           String errMsg = "could not create exchange";
       }

       return this.convertToDto(savedExchange);
    }
	
	public ExchangeDto updateExchange(ExchangeDto exchangeDto) {
        Exchange existingExchange = exchangeRepo.findById(exchangeDto.getId());
        if (existingExchange == null) {
            throw new ServiceException(ResultCode.NOT_FOUND, "Exchange not found");
        }
        entityManager.detach(existingExchange);

        Exchange newExchange = this.convertToModel(exchangeDto);
        
        if (StringUtils.hasText(newExchange.getBrief()) && !newExchange.getBrief().equals(existingExchange.getBrief())) {
            existingExchange.setBrief(newExchange.getBrief());
        }

        if (StringUtils.hasText(newExchange.getExchangeName()) && !newExchange.getExchangeName().equals(existingExchange.getExchangeName())) {
        	Exchange exchange = exchangeRepo.findByExchangeName(newExchange.getExchangeName());
            if (exchange != null) {
                throw new ServiceException(ResultCode.REQ_REJECT, "A exchange with that exchange Name already exists.");
            }else {
            	existingExchange.setExchangeName(newExchange.getExchangeName());
            }
        }
        
        if (StringUtils.hasText(newExchange.getContactAddress()) && !newExchange.getContactAddress().equals(existingExchange.getContactAddress())) {
        	existingExchange.setContactAddress(newExchange.getContactAddress());
        }
        
        if (StringUtils.hasText(newExchange.getRemarks()) && !newExchange.getRemarks().equals(existingExchange.getRemarks())) {
        	existingExchange.setRemarks(newExchange.getRemarks());
        }
        
        Exchange updatedExchange = null;
        try {
            updatedExchange = exchangeRepo.save(existingExchange);
        } catch (Exception ex) {
            String errMsg = "could not update the exchangeDto";
        }
        
        return this.convertToDto(existingExchange);
    }
	
	public void deleteExchange(int id) {
        try {
        	exchangeRepo.deleteById(id);;
        } catch (Exception ex) {
            String errMsg = "could not delete the exchange";
        }
    }
	
	
	public List<ExchangeDto> getExchangeDtoList() {
		return convertToDtoList(getAllExchanges());
	}
	
	public ExchangeDto getExchangeDtoById(int id) {
		return convertToDto(getExchangeById(id));
	}
	
	public List<Exchange> getAllExchanges() {
		return exchangeRepo.findAll();
	}
	
	public Exchange getExchangeById(int id) {
		return exchangeRepo.findById(id);
	}
	
	public String getExchangeNameById(int id) {
		Exchange exchange = exchangeRepo.findById(id);
		return exchange != null ? exchange.getExchangeName() : "";
	}
	
	private ExchangeDto convertToDto(Exchange exchange) {
        return modelMapper.map(exchange, ExchangeDto.class);
    }
	
	private Exchange convertToModel(ExchangeDto exchangeDto) {
        return modelMapper.map(exchangeDto, Exchange.class);
    }
	
	private List<ExchangeDto> convertToDtoList(List<Exchange> exchangeList) {
		List<ExchangeDto> exchangeDtoList = new ArrayList<ExchangeDto>();
        for(int i = 0; i < exchangeList.size(); i++) {
        	exchangeDtoList.add(convertToDto(exchangeList.get(i)));
        }
        return exchangeDtoList;
    }
	
}
