package fullstack.stockmarket.exchange;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableEurekaClient
@EnableHystrix
@EnableZuulProxy
public class ExchangeSvcApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExchangeSvcApplication.class, args);
	}

}
