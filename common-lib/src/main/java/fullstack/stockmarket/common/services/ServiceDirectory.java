package fullstack.stockmarket.common.services;

import java.util.Collections;
import java.util.Map;
import java.util.TreeMap;

/**
 * ServiceDirectory allows access to a backend service using its subdomain
 *
 * StockmarketServices is a map of subdomains -> specs
 * Subdomain is <string> + Env["rootDomain"]
 * e.g. "login" service on prod is "login" + "fullstack.stockmarket"
 *
 * KEEP THIS LIST IN ALPHABETICAL ORDER PLEASE
 */
public class ServiceDirectory {

    private static Map<String, Service> serviceMap;

    static {

        Map<String, Service> map = new TreeMap<>();

        Service service = Service.builder()
                .security(SecurityConstant.SEC_AUTHENTICATED)
                .restrictDev(false)
                .backendDomain("user-service")
                .build();
        map.put("user", service);

        service = Service.builder()
                .security(SecurityConstant.SEC_AUTHENTICATED)
                .restrictDev(false)
                .backendDomain("email-service")
                .noCacheHtml(true)
                .build();
        map.put("email", service);

        service = Service.builder()
                .security(SecurityConstant.SEC_AUTHENTICATED)
                .restrictDev(false)
                .backendDomain("company-service")
                .build();
        map.put("company", service);

        service = Service.builder()
                // Debug site for faraday proxy
                .security(SecurityConstant.SEC_PUBLIC)
                .restrictDev(true)
                .backendDomain("httpbin.org")
                .build();
        map.put("faraday", service);

        service = Service.builder()
                .security(SecurityConstant.SEC_PUBLIC)
                .restrictDev(false)
                .backendDomain("exchange-service")
                .build();
        map.put("exchange", service);

        service = Service.builder()
                .security(SecurityConstant.SEC_AUTHENTICATED)
                .restrictDev(false)
                .backendDomain("sector-service")
                .noCacheHtml(true)
                .build();
        map.put("sector", service);

        service = Service.builder()
                .security(SecurityConstant.SEC_AUTHENTICATED)
                .restrictDev(true)
                .backendDomain("stockprice-service")
                .build();
        map.put("stockprice", service);


        serviceMap = Collections.unmodifiableMap(map);
    }

    public static Map<String, Service> getMapping() {
        return serviceMap;
    }
}
