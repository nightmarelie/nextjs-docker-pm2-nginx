FROM node:alpine

WORKDIR /usr/app

RUN npm i -g pm2

COPY package.json yarn.lock ./

RUN yarn install --production

COPY ./ ./

RUN yarn build

EXPOSE 3000

USER node

CMD ["pm2-runtime", "yarn", "--interpreter", "/bin/sh", "--", "start"]
