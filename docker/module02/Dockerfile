FROM node

WORKDIR /app

COPY .. /app

RUN npm install

#expose the port to our local machine
EXPOSE 80

CMD ["node", "server.js"]