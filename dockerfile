FROM node:latest

WORKDIR /src/usr/app

COPY . .

RUN npm install 

EXPOSE 3000

CMD ["npm", "start"]
