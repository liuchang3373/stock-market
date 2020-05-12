package fullstack.stockmarket.email.config;

import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.profile.DefaultProfile;
import com.aliyuncs.profile.IClientProfile;

import fullstack.stockmarket.common.config.StockRestConfig;
import fullstack.stockmarket.email.props.AppProps;
import fullstack.stockmarket.email.EmailConstant;
import org.springframework.context.annotation.Import;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;

import java.util.concurrent.Executor;

@Configuration
@EnableAsync
@Import(value = StockRestConfig.class)
@SuppressWarnings(value = "Duplicates")
public class AppConfig {

    public static final String ASYNC_EXECUTOR_NAME = "asyncExecutor";

    @Autowired
    AppProps appProps;

    @Bean
    public IAcsClient acsClient() {
        IClientProfile profile = DefaultProfile.getProfile(EmailConstant.ALIYUN_REGION_ID,
                appProps.getAliyunAccessKey(), appProps.getAliyunAccessSecret());
        IAcsClient client = new DefaultAcsClient(profile);
        return client;
    }

    @Bean(name=ASYNC_EXECUTOR_NAME)
    public Executor asyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(3);
        executor.setMaxPoolSize(5);
        executor.setQueueCapacity(100);
        executor.setWaitForTasksToCompleteOnShutdown(true);
        executor.setThreadNamePrefix("AsyncThread-");
        executor.initialize();
        return executor;
    }
}
