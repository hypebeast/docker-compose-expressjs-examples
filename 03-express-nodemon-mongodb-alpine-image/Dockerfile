FROM smebberson/alpine-nodejs:6.0.0

RUN mkdir /app

RUN npm install nodemon -g

WORKDIR /app/src

ADD app/package.json /app/package.json
RUN npm install

ADD app/nodemon.json /app/nodemon.json

EXPOSE 3000

