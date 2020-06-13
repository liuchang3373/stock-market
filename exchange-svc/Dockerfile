FROM java:8-jdk-alpine

COPY ./target/exchange-svc-1.0.0.jar /usr/app/

WORKDIR /usr/app

RUN sh -c 'touch exchange-svc-1.0.0.jar'

ENTRYPOINT ["java", "-jar", "exchange-svc-1.0.0.jar"]