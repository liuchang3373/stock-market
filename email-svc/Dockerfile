FROM java:8-jdk-alpine

COPY ./target/email-svc-1.0.0.jar /usr/app/

WORKDIR /usr/app

RUN sh -c 'touch email-svc-1.0.0.jar'

ENTRYPOINT ["java", "-jar", "email-svc-1.0.0.jar"]