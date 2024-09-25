
# Base image with Node.js
FROM node:16

# Install Python (if you need to run Python code)
RUN apt-get update && \
    apt-get install -y python3

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 4000 for the API
EXPOSE 4000

# Set the default command to start your app
CMD ["node", "src/index.js"]

