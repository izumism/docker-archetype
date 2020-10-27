FROM ubuntu:18.04

WORKDIR /app

RUN apt update

# Japanese langauge environment 
RUN apt install -y language-pack-ja-base language-pack-ja && \
    locale-gen ja_JP.UTF-8
ENV LANG_ja JP.UTF-8

RUN apt update
RUN apt install -y openjdk-11-jdk maven

RUN mvn archetype:generate \
    -DgroupId=kafka_producer \
    -DartifactId=kafka_producer \
    -DarchetypeArtifactId=maven-archetype-quickstart \
    -DarchetypeVersion=1.4 \
    -DinteractiveMode=false

COPY pom.xml /app/kafka_producer/pom.xml

WORKDIR /app/kafka_producer
RUN mvn -T 8 install
