# Use the official Node.js Alpine image as the base image for building the client
FROM node:alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight Node.js image as the base image for serving the client
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built React app from the previous stage
COPY --from=builder /app/dist ./build

# Install serve to run the production server
RUN npm install -g serve

# Expose the frontend port
EXPOSE 3000

# Run the React app in production mode using serve
CMD ["serve", "-s", "build"]
