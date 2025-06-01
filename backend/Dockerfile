FROM node:18

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY . .

RUN npm run build
