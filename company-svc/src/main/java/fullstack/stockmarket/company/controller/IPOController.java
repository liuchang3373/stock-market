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
import fullstack.stockmarket.company.dto.CompanyDto;
import fullstack.stockmarket.company.dto.IPODto;
import fullstack.stockmarket.company.model.Company;
import fullstack.stockmarket.company.model.IPO;
import fullstack.stockmarket.company.res.CompanyListResponse;
import fullstack.stockmarket.company.res.CompanyResponse;
import fullstack.stockmarket.company.res.IPOListResponse;
import fullstack.stockmarket.company.res.IPOResponse;
import fullstack.stockmarket.company.service.CompanyService;
import fullstack.stockmarket.company.service.IPOService;

@RestController
@RequestMapping("/company/ipo")
public class IPOController {
	@Autowired
    IPOService ipoService;
	
	@PostMapping(path = "/create")
    public IPOResponse createIPO(@RequestBody IPODto ipoDto) {
        IPODto newIPODto = ipoService.createIPO(ipoDto);
        return new IPOResponse(newIPODto);
    }
	
	
	@GetMapping(path= "/listAllIPOs")
	public IPOListResponse getAllIPOs() {
		return new IPOListResponse(ipoService.getAllIPOs());
	}
	
	@GetMapping(path= "/getIPOById")
	public IPOResponse getIPO(@RequestParam int id) {
		return new IPOResponse(ipoService.getIPOById(id));
	}
	
	@PutMapping(path= "/update")
    public IPOResponse updateIPO(@RequestBody IPODto IPODto) {
        IPODto updatedIPODto = ipoService.updateIPO(IPODto);
        return new IPOResponse(updatedIPODto);
    }
	
	@DeleteMapping(path = "/delete")
    public BaseResponse deleteIPO(@RequestParam int ipoId) {
		ipoService.deleteIPO(ipoId);
        return BaseResponse.builder().build();
    }
}
