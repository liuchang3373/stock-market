package fullstack.stockmarket.company.controller;

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
import fullstack.stockmarket.common.auth.AuthConstant;
import fullstack.stockmarket.common.auth.Authorize;
import fullstack.stockmarket.company.dto.CompanyDto;
import fullstack.stockmarket.company.model.Company;
import fullstack.stockmarket.company.model.IPO;
import fullstack.stockmarket.company.res.CompanyListResponse;
import fullstack.stockmarket.company.res.CompanyResponse;
import fullstack.stockmarket.company.service.CompanyService;
import fullstack.stockmarket.company.service.IPOService;
import fullstack.stockmarket.company.dto.CompanyDto;
import fullstack.stockmarket.company.model.Company;
import fullstack.stockmarket.company.res.CompanyResponse;

@RestController
@RequestMapping("/company")
public class CompanyController {
	@Autowired
    CompanyService companyService;
	
	@Autowired
    IPOService ipoService;
	@Authorize(value = {
            AuthConstant.AUTHORIZATION_AUTHENTICATED_USER,
            AuthConstant.AUTHORIZATION_ADMIN_USER
    })
	@GetMapping(path= "/listAllCompanies")
	public CompanyListResponse getAllCompanies() {
		List<CompanyDto> companyListDto = companyService.getCompanyListDto();
		CompanyListResponse companyListResponse = new CompanyListResponse(companyListDto);
		return companyListResponse;
	}
	
	@Authorize(value = {
            AuthConstant.AUTHORIZATION_AUTHENTICATED_USER,
            AuthConstant.AUTHORIZATION_ADMIN_USER
    })
	@GetMapping(path= "/getCompanyByCode")
	public CompanyResponse getCompany(@RequestParam String companyCode) {
		return new CompanyResponse(companyService.getCompanyByCompanyCode(companyCode));
	}
	
	@PostMapping(path = "/create")
    public CompanyResponse createCompany(@RequestBody CompanyDto companyDto) {
        CompanyDto newCompanyDto = companyService.createCompany(companyDto);
        return new CompanyResponse(newCompanyDto);
    }
	
	@PutMapping(path= "/update")
    public CompanyResponse updateCompany(@RequestBody CompanyDto companyDto) {
        CompanyDto updatedCompanyDto = companyService.updateCompany(companyDto);
        return new CompanyResponse(updatedCompanyDto);
    }
	
	@DeleteMapping(path = "/delete")
    public BaseResponse deleteCompany(@RequestParam int companyId) {
		companyService.deleteCompany(companyId);
        return BaseResponse.builder().build();
    }
	
	@PostMapping(path= "/createOrUpdate")
    public CompanyResponse createOrUpdateCompany(@RequestBody CompanyDto companyDto) {
		Company exsitCompany = companyService.getCompanyByCompanyId(companyDto.getId());
		if(exsitCompany != null) {
			 CompanyDto updatedCompanyDto = companyService.updateCompany(companyDto);
			 return new CompanyResponse(updatedCompanyDto);
		}else {
			CompanyDto newCompanyDto = companyService.createCompany(companyDto);
			 return new CompanyResponse(newCompanyDto);
		}
    }
}
