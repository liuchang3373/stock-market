package fullstack.stockmarket.exchange.client;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.exchange.ExchangeConstant;
import fullstack.stockmarket.exchange.dto.ExchangeDto;
import fullstack.stockmarket.exchange.res.ExchangeListResponse;
import fullstack.stockmarket.exchange.res.ExchangeNameResponse;
import fullstack.stockmarket.exchange.res.ExchangeResponse;


@FeignClient(name = ExchangeConstant.SERVICE_NAME, path = "/exchange", url = "${stock.exchange-service-endpoint}")
public interface ExchangeClient {

	@GetMapping(path= "/listAllExchanges")
	ExchangeListResponse getAllExchanges();
	
	@GetMapping(path= "/getExchangeById")
	ExchangeResponse getExchangeById(@RequestParam int id);
	
	@GetMapping(path= "/getExchangeNameById")
	ExchangeNameResponse getExchangeNameById(@RequestParam int id);
	
	@PostMapping(path = "/create")
    ExchangeResponse createExchange(@RequestBody ExchangeDto exchangeDto);
	
	@PutMapping(path= "/update")
    ExchangeResponse updateExchange(@RequestBody ExchangeDto exchangeDto);
	
	@DeleteMapping(path = "/delete")
    BaseResponse deleteExchange(@RequestParam int exchangeId);
}
