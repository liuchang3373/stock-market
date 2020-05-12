package fullstack.stockmarket.email;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class EmailSvcApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmailSvcApplication.class, args);
	}

}
