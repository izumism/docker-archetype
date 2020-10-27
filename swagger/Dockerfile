FROM openjdk:8

RUN apt update 
RUN apt install -y maven git

WORKDIR /home

RUN git clone https://github.com/swagger-api/swagger-codegen && \
    cd swagger-codegen && \
    mvn clean package

RUN mkdir -p /local/out/

WORKDIR /home/swagger-codegen
