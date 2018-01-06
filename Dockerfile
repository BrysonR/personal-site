FROM node:carbon

WORKDIR /app

COPY package*.json /app/

RUN npm install -g nodemon pm2

RUN npm install

COPY . /app

EXPOSE 3000
EXPOSE 5858

CMD [ 'npm', 'start' ]