FROM ubuntu:18.04

WORKDIR /tmp

ARG GO_DIST=''

COPY ./build/go1.15.2.linux-amd64.tar.gz /tmp
RUN tar -C /usr/local -xzf go1.15.2.linux-amd64.tar.gz

ENV PATH=${PATH}:/usr/local/go/bin

RUN apt update && \
    apt install -y git

RUN rm -r /tmp/*

WORKDIR /app
