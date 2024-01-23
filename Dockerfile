FROM node:16.20.2-alpine

ADD . /app
WORKDIR /app

RUN yarn install && yarn build

CMD ["./node_modules/.bin/remix-serve", "build"]
