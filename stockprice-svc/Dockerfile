FROM java:8-jdk-alpine

COPY ./target/stockprice-svc-1.0.0.jar /usr/app/

WORKDIR /usr/app

RUN sh -c 'touch stockprice-svc-1.0.0.jar'

ENTRYPOINT ["java", "-jar", "stockprice-svc-1.0.0.jar"]