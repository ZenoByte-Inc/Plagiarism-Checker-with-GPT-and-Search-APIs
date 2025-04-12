FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the development port

# Set environment variables
ENV PORT 3001
ARG NODE_ENV=development
ENV NODE_ENV development

EXPOSE 3001
# Start the development server
CMD ["npm", "run", "dev"]
