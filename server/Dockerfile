
# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /server

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the app to the container
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3001
ENV MONGO_URI=mongodb://mongodb:27017/futsa

RUN npm run build

# Expose the port that the app will run on
EXPOSE $PORT

# Start the app
CMD ["npm", "start"]
