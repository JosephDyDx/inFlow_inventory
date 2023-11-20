FROM node:alpine3.11
WORKDIR /app
COPY package-lock.json package.json /app/
RUN npm install
COPY -r public/ /app/
COPY -r src/ /app/
EXPOSE 80
CMD [ "npm", "start" ]