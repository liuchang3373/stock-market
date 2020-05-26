# stock-market

### Milestone 4 (Submitted by Jack.Liu on 5/26/2020)

###### Zuul(API Gateway) And Eureka Service :

- **Gateway-svc**: https://github.com/liuchang3373/stock-market/tree/master/gateway-svc/src/main/java/full/stack/stockmarket/gateway

All the services are discovered and registered in Eureka: http://127.0.0.1:8761/
![screenshots of Eureka instances](https://github.com/liuchang3373/stock-market/blob/master/document/Eureka_Zuul/all_the_instance.png "screenshots of Eureka instances")

Zuul Gateway config:
https://github.com/liuchang3373/stock-market/blob/master/gateway-svc/src/main/resources/application.yml

Zuul portal for API (Examples):
	http://localhost:8761/company-svc/company/listAllCompanies
	
	http://localhost:8761/sector-svc/sector/listAllSectors
	
	http://localhost:8761/exchange-svc/exchange/listAllExchanges
	
	http://localhost:8761/company-svc/company/getCompanyByCode?companyCode=002931
	
	http://localhost:8761/stockprice-svc/stockprice/listStockPrice?companyCode=500112
	
###### Individual Micro-services: See details as below on Milestone 3
	
###### Intergration with Angular Application:



*****************************************************************************************************
*****************************************************************************************************
*****************************************************************************************************
*****************************************************************************************************


### Milestone 3 (Submitted by Jack.Liu on 5/12/2020)

###### *Micro-services Structure:*  
![Micro-services structure](https://github.com/liuchang3373/stock-market/blob/master/document/micro-services-document/micro-services-structure.png "Micro-services structure")

###### Individual Micro-services:
Each Services with an API client, this API client will be only used by internal services. API project will be packaged by maven to jar file and included in services


------------
Company Services with Company API 
**DB**: Stock_company.company; Stock_company.ipo

- **Company-svc**: https://github.com/liuchang3373/stock-market/tree/master/company-svc/src/main/java/fullstack/stockmarket/company
- **Company-api**: https://github.com/liuchang3373/stock-market/tree/master/company-api/src/main/java/fullstack/stockmarket/company
------------
Exchange Services with Exchange API 
**DB**: Stock_exchange.exchange

- **Exchange-svc**: https://github.com/liuchang3373/stock-market/tree/master/exchange-svc/src/main/java/fullstack/stockmarket/exchange
- **Exchange-api**: https://github.com/liuchang3373/stock-market/tree/master/exchange-api/src/main/java/fullstack/stockmarket/exchange
------------
Sector Services with Sector API 
**DB**: Stock_sector.sector

- **Sector-svc**: https://github.com/liuchang3373/stock-market/tree/master/sector-svc/src/main/java/fullstack/stockmarket/sector
- **Sector-api**: https://github.com/liuchang3373/stock-market/tree/master/sector-api/src/main/java/fullstack/stockmarket/sector
------------
Stock Price Services with Stock Price API 
**DB**: Stock_price.stock_price

- **Stockprice-svc**: https://github.com/liuchang3373/stock-market/tree/master/stockprice-svc/src/main/java/fullstack/stockmarket/stockprice
- **Stockprice-api**: https://github.com/liuchang3373/stock-market/tree/master/stockprice-api/src/main/java/fullstack/stockmarket/stockprice
------------
User Services with User API 
**DB**: Stock_user.user_account

- **User-svc**: https://github.com/liuchang3373/stock-market/tree/master/user-svc/src/main/java/fullstack/stockmarket/user
- **User-api**: https://github.com/liuchang3373/stock-market/tree/master/user-api/src/main/java/fullstack/stockmarket/user
------------
Email Services with Email API 
**DB**: No DBs

- **Email-svc**: https://github.com/liuchang3373/stock-market/tree/master/email-svc/src/main/java/fullstack/stockmarket/email
- **Email-api**: https://github.com/liuchang3373/stock-market/tree/master/email-api/src/main/java/fullstack/stockmarket/email
------------
 Common-lib is used by each services as a jar file
 
- **Common-lib**: https://github.com/liuchang3373/stock-market/tree/master/common-lib/src/main/java/fullstack/stockmarket
------------
###### *API Document and Unit Testing:*
###### Swagger Document:
Company Swagger Document:  https://github.com/liuchang3373/stock-market/blob/master/document/swagger-document/Company_Swagger_UI.pdf

Company API Doument: https://github.com/liuchang3373/stock-market/blob/master/document/swagger-document/Company_api_doc.json

Exchange Swagger Document: https://github.com/liuchang3373/stock-market/blob/master/document/swagger-document/Exchange_Swagger_UI.pdf

Exchange API Doument: https://github.com/liuchang3373/stock-market/blob/master/document/swagger-document/Exchange_api_doc.json

Sector Swagger Document: https://github.com/liuchang3373/stock-market/blob/master/document/swagger-document/Sector_Swagger_UI.pdf

Sector API Doument: https://github.com/liuchang3373/stock-market/blob/master/document/swagger-document/Sector_api_doc.json

User Swagger Document: https://github.com/liuchang3373/stock-market/blob/master/document/swagger-document/User_Swagger_UI.pdf

User API Doument: https://github.com/liuchang3373/stock-market/blob/master/document/swagger-document/User_api_doc.json

Stock Price Swagger Document: https://github.com/liuchang3373/stock-market/blob/master/document/swagger-document/StockPrice_Swagger_UI.pdf

Stock Price API Doument: https://github.com/liuchang3373/stock-market/blob/master/document/swagger-document/StockPrice_api_doc.json

Email Swagger Document: https://github.com/liuchang3373/stock-market/blob/master/document/swagger-document/Email_Swagger_UI.pdf

Email API Doument: https://github.com/liuchang3373/stock-market/blob/master/document/swagger-document/Email_api_doc.json

###### PostMan Testing result:
https://www.postman.com/collections/cabafff74f9873920b50


*****************************************************************************************************
*****************************************************************************************************
*****************************************************************************************************
*****************************************************************************************************


### Milestone 1

###### *Design document:*  
The path of design document(wireframe was included in design document): 
https://github.com/liuchang3373/stock-market/blob/master/document


### Milestone 2

###### *Frontend - Angular Application: * 

- The path of Angular application：
https://github.com/liuchang3373/stock-market/tree/master/frontend/stock-app

- The architecture of main components：
![component structure](https://github.com/liuchang3373/stock-market/blob/master/document/component-structure.png "component structure")

- The path of services:
https://github.com/liuchang3373/stock-market/tree/master/frontend/stock-app/src/app/%40core/service

- Routing: 
    
    AppRoutingModule: https://github.com/liuchang3373/stock-market/blob/master/frontend/stock-app/src/app/app-routing.module.ts

    AuthRoutingModule: https://github.com/liuchang3373/stock-market/blob/master/frontend/stock-app/src/app/auth/auth-routing.module.ts

    AdminRoutingModule: https://github.com/liuchang3373/stock-market/blob/master/frontend/stock-app/src/app/pages/admin/admin-routing.module.ts

    UsersRoutingModule: https://github.com/liuchang3373/stock-market/blob/master/frontend/stock-app/src/app/pages/users/users-routing.module.ts


- Pipes: 
https://github.com/liuchang3373/stock-market/tree/master/frontend/stock-app/src/app/%40theme/pipes

- Styling: 
https://github.com/liuchang3373/stock-market/tree/master/frontend/stock-app/src/app/%40theme/styles

- Unit Testing:
user.service: https://github.com/liuchang3373/stock-market/blob/master/frontend/stock-app/src/app/%40core/service/service-test/user.service.spec.ts

Test result:
![unit test result of user service ](https://github.com/liuchang3373/stock-market/blob/master/document/unit-test-result.png "unit test result of user service ")

- UI screen shorts:
https://github.com/liuchang3373/stock-market/blob/master/document/screenshots.pptx
