FROM node:16.20.2-alpine

ADD . /app
WORKDIR /app

RUN yarn install && yarn build

CMD ["yarn", "start"]
