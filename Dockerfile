FROM node:20.15.1-slim AS angular
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
RUN npm run build:prod

FROM nginx:1.15.8-alpine

COPY --from=angular app/dist/avaliacaofilmes-web/browser /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
