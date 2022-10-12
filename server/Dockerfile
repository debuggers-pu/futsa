FROM node:14
RUN npm install -g nodemon
WORKDIR /app-server
COPY package.json /app-server
RUN npm install
COPY . /app-server
EXPOSE 8000
CMD ["npm", "run", "dev"]

