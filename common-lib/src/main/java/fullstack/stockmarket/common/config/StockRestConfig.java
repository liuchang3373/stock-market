package fullstack.stockmarket.common.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import fullstack.stockmarket.common.aop.SentryClientAspect;


/**
 * Use this common config for Rest API
 */
@Configuration
@Import(value = {StockConfig.class, SentryClientAspect.class})
public class StockRestConfig  {
}
