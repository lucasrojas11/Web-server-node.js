FROM node:latest

WORKDIR /src/usr/app

COPY . .

RUN npm install 

EXPOSE 8081

CMD ["npm", "start"]
