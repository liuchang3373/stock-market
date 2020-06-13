FROM java:8-jdk-alpine

COPY ./target/sector-svc-1.0.0.jar /usr/app/

WORKDIR /usr/app

RUN sh -c 'touch sector-svc-1.0.0.jar'

ENTRYPOINT ["java", "-jar", "sector-svc-1.0.0.jar"]