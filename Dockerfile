FROM node:alpine
WORKDIR /usr/graphql/mern/server
COPY package*.json ./
RUN npm install --force
COPY . .
EXPOSE 5000
CMD [ "node", "app.js" ]
