FROM ubuntu:20.04

WORKDIR /app

RUN apt update && \
    apt install -y curl

# Latest nodejs and npm
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt install -y nodejs

# Typescript compiler
RUN npm install -g typescript

RUN npm init -y

RUN npm install --save-dev jest@23.6.0
RUN npm install --save-dev eslint@5.10.0
RUN npm install --save-dev eslint-plugin-jest@22.1.2
RUN npm install --save-dev prettier-eslint-cli@4.7.1
RUN npm install --save-dev @babel/core@7.2.0
RUN npm install --save-dev @babel/preset-react@7.0.0 @babel/preset-env@7.2.0
RUN npm install --save-dev babel-jest@23.6.0
RUN npm install --save-dev babel-core@^7.0.0-bridge.0
RUN npm install react@16.4.2
RUN npm install --save-dev react-dom@16.4.2
RUN npm install --save-dev eslint-plugin-react@7.11.1

EXPOSE 3000
# React-Typescript
# RUN npx create-react-app my-react --template typescript

# RUN npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser \
    # eslint-config-airbnb-typescript eslint-plugin-jest

