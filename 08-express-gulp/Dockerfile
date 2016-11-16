FROM node:6.9.1-alpine

MAINTAINER Sebastian Ruml <sebastian@sebastianruml.name>

RUN apk update \
    && apk upgrade \
    && apk add --update \
            ruby \
            ruby-bundler \
            ca-certificates \
    && update-ca-certificates \
    && gem install sass --no-ri --no-rdoc \
    && rm /var/cache/apk/* \
    && rm -rf /tmp/*

RUN mkdir /app
RUN npm install gulp -g

WORKDIR /app

ADD app/package.json /app/package.json
RUN npm install

ADD app/nodemon.json /app/nodemon.json
ADD app/gulpfile.js /app/gulpfile.js

EXPOSE 3000
EXPOSE 35729

