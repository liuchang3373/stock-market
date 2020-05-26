package fullstack.stockmarket.company;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients(basePackages = {"fullstack.stockmarket.exchange", "fullstack.stockmarket.sector"})
@EnableEurekaClient
@EnableHystrix
@EnableZuulProxy
public class CompanySvcApplication {

	public static void main(String[] args) {
		SpringApplication.run(CompanySvcApplication.class, args);
	}

}
