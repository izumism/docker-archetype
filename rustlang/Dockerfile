FROM ubuntu:18.04

SHELL ["/bin/bash", "-c"]

WORKDIR /app

RUN apt update && \
    apt install -y curl

RUN curl https://sh.rustup.rs -sSf | sh -s -- -y
RUN bash && source $HOME/.cargo/env

