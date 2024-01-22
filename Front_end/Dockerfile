FROM node:alpine3.11
WORKDIR /app
COPY package-lock.json package.json /app/
RUN npm install
COPY public /app/public
COPY src /app/src
EXPOSE 80
CMD [ "npm", "start" ]