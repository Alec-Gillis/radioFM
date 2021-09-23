# Stage 1

FROM node:12-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod


# Stage 2

FROM nginx:1.17.1-alpine

# 						Get /dist/src from angular.json outputPath property
COPY --from=build-step /app/dist/src /usr/share/nginx/html