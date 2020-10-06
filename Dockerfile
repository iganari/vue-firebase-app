FROM node:14.13.0-alpine3.12

COPY . /usr/share/vue
WORKDIR /usr/share/vue

RUN npm install
EXPOSE 3000

CMD npm run serve --host 0.0.0.0 --port 3000

