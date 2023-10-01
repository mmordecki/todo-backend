FROM node:20.7.0

WORKDIR /app

COPY package.json ./

RUN npm cache clear --force

RUN npm install

COPY . .

EXPOSE 5123

CMD [ "npm", "run", "start:dev" ]
