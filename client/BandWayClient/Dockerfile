# Use the official Node.js image.
FROM node:16.18.1

# Create and set the working directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json.
COPY package*.json ./

# Install the dependencies.
RUN npm install

# Copy the rest of the application code.
COPY .. .

# Expose the port the application runs on.
EXPOSE 5173

# Define the command to run the application.
CMD ["npm", "run", "dev"]