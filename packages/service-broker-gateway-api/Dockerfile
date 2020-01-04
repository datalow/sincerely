FROM node:latest

ENV NODE_ENV=production

WORKDIR /var/app

COPY package.json ./

RUN npm install --production

COPY . .

CMD ["npm", "start"]
