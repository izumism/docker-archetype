FROM ubuntu:18.04

SHELL ["/bin/bash", "-c"]

WORKDIR /app

RUN apt update
RUN apt install -y software-properties-common
RUN add-apt-repository -y ppa:hvr/ghc && \
    apt update
RUN apt install -y cabal-install-3.4 ghc-8.8.4

ENV PATH=$PATH:/opt/ghc/bin
