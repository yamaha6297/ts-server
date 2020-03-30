FROM node:13-alpine

EXPOSE 3000
WORKDIR app
RUN npm i -g nodemon
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "run", "app:prod"]