# React application development environment setup 
FROM node:latest

SHELL ["/bin/bash", "-c"]

WORKDIR /app

COPY ./app/package*.json ./

RUN npm install --silent

EXPOSE 3000

RUN mkdir /var/log/react
# cleanup
RUN apt clean -y && \
    rm -rf /var/lib/apt/lists/* && \
    rm -rf /tmp/*

CMD npm start 
