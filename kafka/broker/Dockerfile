FROM ubuntu:20.04

WORKDIR /app

RUN apt update

# Japanese langauge environment 
RUN apt install -y language-pack-ja-base language-pack-ja && \
    locale-gen ja_JP.UTF-8
ENV LANG_ja JP.UTF-8

RUN apt update
RUN apt install -y openjdk-11-jre

WORKDIR /tmp
# Install kafka
RUN apt install -y wget
RUN wget https://ftp.jaist.ac.jp/pub/apache/kafka/2.6.0/kafka_2.13-2.6.0.tgz
RUN tar -C /usr/local -xzf kafka_2.13-2.6.0.tgz

WORKDIR /usr/local/kafka_2.13-2.6.0

COPY start_kafka.sh start_kafka.sh
CMD ./start_kafka.sh
