package fullstack.stockmarket.stockprice.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.stockprice.dto.StockPriceDto;
import fullstack.stockmarket.stockprice.dto.TwoCompanyStockChangeDto;
import fullstack.stockmarket.stockprice.res.StockPriceListResponse;
import fullstack.stockmarket.stockprice.res.StockPriceResponse;
import fullstack.stockmarket.stockprice.res.TwoCompanyStockChangeResponse;
import fullstack.stockmarket.stockprice.service.StockPriceService;


@RestController
@RequestMapping("/stockprice")
public class StockPriceController {
	@Autowired
	StockPriceService stockPriceService;
	
	@GetMapping(path="/listStockPrice")
	public StockPriceListResponse getStockPriceByCompanyCode(@RequestParam String companyCode) {
		List<StockPriceDto> StockPriceListDto = stockPriceService.getStockPriceByCompanyCode(companyCode);
		StockPriceListResponse StockPriceListResponse = new StockPriceListResponse(StockPriceListDto);
		
		return StockPriceListResponse;
	}
	
	@GetMapping(path="/getTwoCompanyStock")
	public TwoCompanyStockChangeResponse getTwoCompanyStock(@RequestParam String company1Code, @RequestParam String company2Code, @RequestParam Date pickedDate1, @RequestParam Date pickedDate2) {
		TwoCompanyStockChangeDto twoCompanyStockChange = stockPriceService.getTwoCompanyStock(company1Code, company2Code, pickedDate1, pickedDate2);
		TwoCompanyStockChangeResponse twoCompanyStockChangeResponse = new TwoCompanyStockChangeResponse(twoCompanyStockChange);
		return twoCompanyStockChangeResponse;
	}
	
	@PostMapping(path = "/import")
	public StockPriceListResponse importExcel(@RequestBody MultipartFile file) throws Exception{
		List<StockPriceDto> StockPriceListDto = stockPriceService.importExcelData(file);
		StockPriceListResponse StockPriceListResponse = new StockPriceListResponse(StockPriceListDto);
		return StockPriceListResponse;
	}
	
	@PostMapping(path = "/create")
    public StockPriceResponse createStockPrice(@RequestBody StockPriceDto stockPriceDto) {
        StockPriceDto newStockPriceDto = stockPriceService.createStockPrice(stockPriceDto);
        return new StockPriceResponse(newStockPriceDto);
    }
	
	@PutMapping(path= "/update")
    public StockPriceResponse updateStockPrice(@RequestBody StockPriceDto stockPriceDto) {
        StockPriceDto updatedStockPriceDto = stockPriceService.updateStockPrice(stockPriceDto);
        return new StockPriceResponse(updatedStockPriceDto);
    }
	
	@DeleteMapping(path = "/delete")
    public BaseResponse deleteStockPrice(@RequestParam int stockPriceId) {
		stockPriceService.deleteStockPrice(stockPriceId);
        return BaseResponse.builder().build();
    }
}
