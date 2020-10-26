FROM ubuntu:20.04

RUN apt update
RUN apt install -y curl

WORKDIR /tmp
ENV PB_REL="https://github.com/protocolbuffers/protobuf/releases"
RUN curl -LO $PB_REL/download/v3.13.0/protoc-3.13.0-linux-x86_64.zip && \
    unzip protoc-1.13.0-linux-x86_64.zip -d $HOME/.local
ENV PATH=${PATH}:${HOME}/.local/bin

WORKDIR /home/protobuf
