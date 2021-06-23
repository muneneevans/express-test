FROM node:10-alpine

RUN mkdir /app
WORKDIR /app
COPY ./package.json /app

RUN npm install
RUN npm install nodemon
COPY . /app

CMD ["node" , "app.js"]