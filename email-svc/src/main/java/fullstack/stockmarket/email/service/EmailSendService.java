package fullstack.stockmarket.email.service;

import com.aliyuncs.IAcsClient;
import com.aliyuncs.dm.model.v20151123.SingleSendMailRequest;
import com.aliyuncs.dm.model.v20151123.SingleSendMailResponse;
import com.aliyuncs.exceptions.ClientException;

import fullstack.stockmarket.common.env.EnvConfig;
import fullstack.stockmarket.common.env.EnvConstant;
import fullstack.stockmarket.email.EmailConstant;
import fullstack.stockmarket.email.config.AppConfig;
import fullstack.stockmarket.email.res.EmailRequest;
import io.sentry.SentryClient;
import io.sentry.context.Context;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;


@Service
public class EmailSendService {

    @Autowired
    EnvConfig envConfig;

    @Autowired
    IAcsClient acsClient;

    @Autowired
    SentryClient sentryClient;

    @Async(AppConfig.ASYNC_EXECUTOR_NAME)
    public void sendMailAsync(EmailRequest req) {
        

        // In dev and uat - only send emails to @jskillcloud.com
        if (!EnvConstant.ENV_PROD.equals(envConfig.getName())) {
            // prepend env for sanity
            String subject = String.format("[%s] %s", envConfig.getName(), req.getSubject());
            req.setSubject(subject);

            if (!req.getTo().endsWith(EmailConstant.STOCKMARKET_EMAIL_SUFFIX)) {
                //logger.warn("Intercepted sending due to non-production environment.");
                return;
            }
        }

        SingleSendMailRequest mailRequest = new SingleSendMailRequest();
        mailRequest.setAccountName(EmailConstant.FROM);
        mailRequest.setFromAlias(EmailConstant.FROM_NAME);
        mailRequest.setAddressType(1);
        mailRequest.setToAddress(req.getTo());
        mailRequest.setReplyToAddress(false);
        mailRequest.setSubject(req.getSubject());
        mailRequest.setHtmlBody(req.getHtmlBody());

        try {
            SingleSendMailResponse mailResponse = acsClient.getAcsResponse(mailRequest);
            //logger.info("Successfully sent email - request id : " + mailResponse.getRequestId(), logContext);
        } catch (ClientException ex) {
            Context sentryContext = sentryClient.getContext();
            sentryContext.addTag("subject", req.getSubject());
            sentryContext.addTag("to", req.getTo());
            sentryClient.sendException(ex);
            //logger.error("Unable to send email ", ex, logContext);
        }
    }
}
