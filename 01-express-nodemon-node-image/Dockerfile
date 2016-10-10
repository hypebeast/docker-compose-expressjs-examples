FROM node:6.7

RUN mkdir /app

RUN npm install nodemon -g

WORKDIR /app

ADD app/package.json /app/package.json
RUN npm install

ADD app/nodemon.json /app/nodemon.json

EXPOSE 3000

