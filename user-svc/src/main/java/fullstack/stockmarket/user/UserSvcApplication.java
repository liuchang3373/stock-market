package fullstack.stockmarket.user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableEurekaClient
@EnableFeignClients(basePackages = {"fullstack.stockmarket.email"})
@EnableHystrix
@EnableZuulProxy
public class UserSvcApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserSvcApplication.class, args);
	}

}
