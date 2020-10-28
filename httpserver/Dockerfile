FROM ubuntu:18.04

WORKDIR /app

EXPOSE 80

RUN apt update && \
    apt install -y nginx

CMD ["nginx", "-g", "daemon off;"]
