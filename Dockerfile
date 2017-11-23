FROM node:carbon

WORKDIR /app

COPY package*.json /app/

RUN npm install -g nodemon

RUN npm install

COPY . /app

EXPOSE 3000
EXPOSE 5858

CMD [ 'npm', 'start' ]