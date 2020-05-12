package fullstack.stockmarket.company.client;
import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.company.CompanyConstant;
import fullstack.stockmarket.company.dto.CompanyDto;
import fullstack.stockmarket.company.dto.IPODto;
import fullstack.stockmarket.company.res.CompanyListResponse;
import fullstack.stockmarket.company.res.CompanyResponse;
import fullstack.stockmarket.company.res.IPOListResponse;
import fullstack.stockmarket.company.res.IPOResponse;


@FeignClient(name = CompanyConstant.SERVICE_NAME, path = "/company", url = "${stock.company-service-endpoint}")
public interface CompanyClient {
	
	@GetMapping(path= "/listAllCompanies")
	public CompanyListResponse getAllCompanies();
	
	@GetMapping(path= "/getCompanyByCode")
	public CompanyResponse getCompany(@RequestParam String companyCode);
	
	@PostMapping(path = "/create")
    public CompanyResponse createCompany(@RequestBody CompanyDto companyDto);
	
	@PutMapping(path= "/update")
    public CompanyResponse updateCompany(@RequestBody CompanyDto companyDto);
	
	@DeleteMapping(path = "/delete")
    public BaseResponse deleteCompany(@RequestParam int companyId);
	
	@PostMapping(path = "/ipo/create")
    public IPOResponse createIPO(@RequestBody IPODto ipoDto);
	
	
	@GetMapping(path= "/ipo/listAllIPOs")
	public IPOListResponse getAllIPOs();
	
	@GetMapping(path= "/ipo/getIPOById")
	public IPOResponse getIPO(@RequestParam int id);
	
	@PutMapping(path= "/ipo/update")
    public IPOResponse updateIPO(@RequestBody IPODto IPODto);
	
	@DeleteMapping(path = "/ipo/delete")
    public BaseResponse deleteIPO(@RequestParam int ipoId);
}
