package fullstack.stockmarket.common.auth;

public class AuthConstant {

    public static final String COOKIE_NAME = "stock-zuul";
    // header set for internal user id
    public static final String CURRENT_USER_HEADER = "zuul-current-user-id";
    // AUTHORIZATION_HEADER is the http request header
    // key used for accessing the internal authorization.
    public static final String AUTHORIZATION_HEADER = "Authorization";
    // AUTHORIZATION_ANONYMOUS_WEB is set as the Authorization header to denote that
    // a request is being made bu an unauthenticated web user
    public static final String AUTHORIZATION_ANONYMOUS_WEB = "zuul-anonymous";
    // AUTHORIZATION_COMPANY_SERVICE is set as the Authorization header to denote
    // that a request is being made by the company service
    public static final String AUTHORIZATION_COMPANY_SERVICE = "company-service";
    // AUTHORIZATION_EXCHANGE_SERVICE is set as the Authorization header to denote that
    // a request is being made by the exchange microservice
    public static final String AUTHORIZATION_EXCHANGE_SERVICE = "exchange-service";
    // AUTHORIZATION_SECTOR_SERVICE is set as the Authorization header to denote that
    // a request is being made by the sector service
    public static final String AUTHORIZATION_SECTOR_SERVICE = "sector-service";
    // AUTHORIZATION_SUPPORT_USER is set as the Authorization header to denote that
    public static final String AUTHORIZATION_SUPPORT_USER = "zuul-support";
    // AUTHORIZATION_SUPERPOWERS_SERVICE is set as the Authorization header to
    // denote that a request is being made by the dev-only superpowers service
    public static final String AUTHORIZATION_SUPERPOWERS_SERVICE = "superpowers-service";
    // AUTHORIZATION_USER_SERVICE is set as the Authorization header to denote that
    // a request is being made by the www login / signup system
    public static final String AUTHORIZATION_USER_SERVICE = "user-service";
    // AUTHORIZATION_STOCKPRICE_SERVICE is set as the Authorization heade to denote that
    // a request is being made by the stockprice microservice
    public static final String AUTHORIZATION_STOCKPRICE_SERVICE = "stockprice-service";
    // AUTHORIZATION_AUTHENTICATED_USER is set as the Authorization header to denote that
    // a request is being made by an authenticated we6b user
    public static final String AUTHORIZATION_AUTHENTICATED_USER = "zuul-authenticated";
    // AUTHORIZATION_EMAIL_SERVICE is set as the Authorization header to denote that
    // a request is being made by the email service
    public static final String AUTHORIZATION_EMAIL_SERVICE = "email-service";
    // AUTH ERROR Messages
    public static final String ERROR_MSG_DO_NOT_HAVE_ACCESS = "You do not have access to this service";
    public static final String ERROR_MSG_MISSING_AUTH_HEADER = "Missing Authorization http header";
}
