package fullstack.stockmarket.common.config;

import javax.annotation.PreDestroy;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import fullstack.stockmarket.common.env.EnvConfig;
import io.sentry.Sentry;
import io.sentry.SentryClient;

@Configuration
@EnableConfigurationProperties(StockProps.class)
public class StockConfig implements WebMvcConfigurer{
	@Value("${spring.profiles.active:NA}")
    private String activeProfile;

    @Value("${spring.application.name:NA}")
    private String appName;
    
    @Autowired
    StockProps stockProps;
    
	@Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
	
	@Bean
    public EnvConfig envConfig() {
        return EnvConfig.getEnvConfg(activeProfile);
    }

    @Bean
    public SentryClient sentryClient() {

        SentryClient sentryClient = Sentry.init(stockProps.getSentryDsn());
        sentryClient.setEnvironment(activeProfile);
        sentryClient.setRelease(stockProps.getDeployEnv());
        sentryClient.addTag("service", appName);

        return sentryClient;
    }
    
    @PreDestroy
    public void destroy() {
        sentryClient().closeConnection();
    }
}
