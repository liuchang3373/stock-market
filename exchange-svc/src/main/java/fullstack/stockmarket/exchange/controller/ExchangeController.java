package fullstack.stockmarket.exchange.controller;

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
import fullstack.stockmarket.exchange.dto.ExchangeDto;
import fullstack.stockmarket.exchange.res.ExchangeResponse;
import fullstack.stockmarket.exchange.dto.ExchangeDto;
import fullstack.stockmarket.exchange.model.Exchange;
import fullstack.stockmarket.exchange.repo.ExchangeRepo;
import fullstack.stockmarket.exchange.res.ExchangeListResponse;
import fullstack.stockmarket.exchange.res.ExchangeNameResponse;
import fullstack.stockmarket.exchange.res.ExchangeResponse;
import fullstack.stockmarket.exchange.service.ExchangeService;


@RestController
@RequestMapping("/exchange")
public class ExchangeController {
	@Autowired
	ExchangeService exchangeService;
	
	@GetMapping(path= "/listAllExchanges")
	public ExchangeListResponse getAllExchanges() {
		List<ExchangeDto> exchangeListDto = exchangeService.getExchangeDtoList();
		ExchangeListResponse exchangeListResponse = new ExchangeListResponse(exchangeListDto);
		return exchangeListResponse;
	}
	
	@GetMapping(path= "/getExchangeById")
	public ExchangeResponse getExchangeById(@RequestParam int id) {
		ExchangeDto exchangeDto = exchangeService.getExchangeDtoById(id);
		ExchangeResponse exchangeResponse = new ExchangeResponse(exchangeDto);
		return exchangeResponse;
	}
	
	@GetMapping(path= "/getExchangeNameById")
	public ExchangeNameResponse getExchangeNameById(@RequestParam int id) {
		String exchangeName = exchangeService.getExchangeNameById(id);
		ExchangeNameResponse exchangeNameResponse = new ExchangeNameResponse(exchangeName);
		return exchangeNameResponse;
	}
	
	@PostMapping(path = "/create")
    public ExchangeResponse createExchange(@RequestBody ExchangeDto exchangeDto) {
        ExchangeDto newExchangeDto = exchangeService.createExchange(exchangeDto);
        return new ExchangeResponse(newExchangeDto);
    }
	
	@PutMapping(path= "/update")
    public ExchangeResponse updateExchange(@RequestBody ExchangeDto exchangeDto) {
        ExchangeDto updatedExchangeDto = exchangeService.updateExchange(exchangeDto);
        return new ExchangeResponse(updatedExchangeDto);
    }
	
	@DeleteMapping(path = "/delete")
    public BaseResponse deleteExchange(@RequestParam int exchangeId) {
		exchangeService.deleteExchange(exchangeId);
        return BaseResponse.builder().build();
    }
	
	@PostMapping(path= "/createOrUpdate")
    public ExchangeResponse createOrUpdateExchange(@RequestBody ExchangeDto exchangeDto) {
		Exchange exsitExchange = exchangeService.getExchangeById(exchangeDto.getId());
		if(exsitExchange != null) {
			 ExchangeDto updatedExchangeDto = exchangeService.updateExchange(exchangeDto);
			 return new ExchangeResponse(updatedExchangeDto);
		}else {
			ExchangeDto newExchangeDto = exchangeService.createExchange(exchangeDto);
			 return new ExchangeResponse(newExchangeDto);
		}
    }
}
