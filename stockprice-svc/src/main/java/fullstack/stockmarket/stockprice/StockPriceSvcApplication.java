package fullstack.stockmarket.stockprice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableEurekaClient
@EnableHystrix
@EnableZuulProxy
public class StockPriceSvcApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockPriceSvcApplication.class, args);
	}

}
