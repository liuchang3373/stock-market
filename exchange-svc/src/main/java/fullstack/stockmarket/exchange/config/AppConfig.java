package fullstack.stockmarket.exchange.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.scheduling.annotation.EnableAsync;

import fullstack.stockmarket.common.config.StockRestConfig;

@Configuration
@EnableAsync
@Import(value = {StockRestConfig.class})
@SuppressWarnings(value = "Duplicates")
public class AppConfig {

    public static final String ASYNC_EXECUTOR_NAME = "asyncExecutor";


}