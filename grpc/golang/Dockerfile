FROM golang:1.15

RUN apt update

WORKDIR /home
RUN apt install -y protobuf-compiler

ARG PROJECT_DIR=/home/productinfo/service
RUN mkdir -p {PROJECT_DIR}
WORKDIR ${PROJECT_DIR}
RUN go mod init productinfo/service
COPY ./build/go.mod ./

RUN go get -u google.golang.org/grpc && \
    go get -u github.com/golang/protobuf/protoc-gen-go 

RUN mkdir protogo
