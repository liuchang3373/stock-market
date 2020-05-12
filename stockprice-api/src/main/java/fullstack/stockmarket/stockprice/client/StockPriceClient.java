package fullstack.stockmarket.stockprice.client;
import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.stockprice.StockPriceConstant;
import fullstack.stockmarket.stockprice.dto.StockPriceDto;
import fullstack.stockmarket.stockprice.res.StockPriceListResponse;
import fullstack.stockmarket.stockprice.res.StockPriceResponse;


@FeignClient(name = StockPriceConstant.SERVICE_NAME, path = "/stockprice", url = "${stock.stockprice-service-endpoint}")
public interface StockPriceClient {
	
	@GetMapping(path="/listStockPrice")
	public StockPriceListResponse getStockPriceByCompanyCode(@RequestParam String companyCode);
	
	@PostMapping(path = "/import")
	public StockPriceListResponse importExcel(@RequestBody MultipartFile file) throws Exception;
	
	@PostMapping(path = "/create")
    public StockPriceResponse createStockPrice(@RequestBody StockPriceDto stockPriceDto);
	
	@PutMapping(path= "/update")
    public StockPriceResponse updateStockPrice(@RequestBody StockPriceDto stockPriceDto);
	
	@DeleteMapping(path = "/delete")
    public BaseResponse deleteStockPrice(@RequestParam int stockPriceId);
}
