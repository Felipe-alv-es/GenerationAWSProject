FROM node 

WORKDIR /usr/src/NewCrudGeneration-master

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5432

CMD ["node", "server.js"]