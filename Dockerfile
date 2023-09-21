FROM node:alpine
WORKDIR /usr/graphql/mern/server
COPY package*.json ./
RUN npm install --force
COPY . .
EXPOSE 5000
CMD [ "node", "app.js" ]

#1631b162532e746f74b5df32403b59bc9437253cc1b9c4a61a2be35485a324ce