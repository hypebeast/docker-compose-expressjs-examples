FROM smebberson/alpine-nodejs:6.0.0

RUN mkdir /app

RUN npm install pm2 -g

WORKDIR /app/src

COPY app/package.json /app/package.json
RUN npm install

COPY ./entrypoint.sh /entrypoint.sh
RUN sed -i 's/\r//' /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3000

CMD ["pm2", "start", "-x ./bin/www", "--no-daemon"]
