FROM smebberson/alpine-nodejs:6.0.0

RUN mkdir /app

RUN npm install pm2 -g

WORKDIR /app/src

ADD app/package.json /app/package.json
RUN npm install

ADD ./entrypoint.sh /entrypoint.sh
RUN sed -i 's/\r//' /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]
CMD ["pm2", "start", "-x $APP", "--no-daemon"]
