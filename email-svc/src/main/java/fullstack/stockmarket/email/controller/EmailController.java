package fullstack.stockmarket.email.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import fullstack.stockmarket.common.api.BaseResponse;
import fullstack.stockmarket.email.res.EmailRequest;
import fullstack.stockmarket.email.service.EmailSendService;

import javax.validation.Valid;

@RestController
@RequestMapping("/email")
@Validated
public class EmailController {

    //private static ILogger logger = SLoggerFactory.getLogger(EmailController.class);

    @Autowired
    private EmailSendService mailSendService;

    @PostMapping(path = "/send")
    public BaseResponse send(@RequestBody @Valid EmailRequest request) {
        mailSendService.sendMailAsync(request);
        return BaseResponse.builder().message("email has been sent async.").build();
    }


}
