FROM smebberson/alpine-nodejs:6.0.0

RUN mkdir /app

RUN npm install pm2 -g

WORKDIR /app

COPY app /app
RUN npm install --production

EXPOSE 3000

CMD ["pm2", "start", "-x ./bin/www", "--no-daemon"]
