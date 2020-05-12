package fullstack.stockmarket.email.client;
import java.util.List;

import javax.validation.Valid;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.email.EmailConstant;
import fullstack.stockmarket.email.res.EmailRequest;



@FeignClient(name = EmailConstant.SERVICE_NAME, path = "/email", url = "${stock.email-service-endpoint}")
public interface EmailClient {
	
	@PostMapping(path = "/send")
    public BaseResponse send(@RequestBody @Valid EmailRequest request);
}
