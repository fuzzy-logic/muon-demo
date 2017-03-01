
FROM node:6

RUN mkdir /applocal

EXPOSE 3419

COPY . /applocal

WORKDIR /applocal

RUN npm install
CMD npm start
