# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /client

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the app to the container
COPY . .

# Set environment variables
ENV REACT_APP_API_URL=http://localhost:3001/api/
ENV REACT_APP_API=http://localhost:3001
ENV JWT_SECRET_KEY = iamagoodboy
ENV REFRESH_SECRET_KEY = iamabadboy

# Build the app for production
RUN npm run build

# Serve the built app
CMD ["npx", "serve", "-s", "build"]
