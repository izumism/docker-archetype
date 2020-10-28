FROM ubuntu:18.04

WORKDIR /app

RUN apt update && \
    apt install -y curl

# Latest nodejs and npm
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt install -y nodejs

# Typescript compiler
RUN npm install -g typescript

EXPOSE 3000
# React-Typescript
RUN npx create-react-app my-react --template typescript

RUN npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser \
    eslint-config-airbnb-typescript eslint-plugin-jest

