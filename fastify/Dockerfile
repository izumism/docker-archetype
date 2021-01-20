FROM node:latest

WORKDIR /app
RUN npm install -g typescript && \
    npm install -g ts-node

COPY ./app/package*.json ./
RUN npm install --silent

EXPOSE 3000

CMD tail -f /dev/null
