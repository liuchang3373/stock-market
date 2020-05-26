package fullstack.stockmarket.sector;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableEurekaClient
@EnableHystrix
@EnableZuulProxy
public class SectorSvcApplication {

	public static void main(String[] args) {
		SpringApplication.run(SectorSvcApplication.class, args);
	}

}
