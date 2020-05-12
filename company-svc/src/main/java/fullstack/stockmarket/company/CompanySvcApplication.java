package fullstack.stockmarket.company;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients(basePackages = {"fullstack.stockmarket.exchange", "fullstack.stockmarket.sector"})
public class CompanySvcApplication {

	public static void main(String[] args) {
		SpringApplication.run(CompanySvcApplication.class, args);
	}

}
