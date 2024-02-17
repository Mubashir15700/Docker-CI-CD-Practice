FROM node:18-alpine

WORKDIR /api

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
