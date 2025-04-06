FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the application
COPY . .

# Expose the development port
EXPOSE 3001

# Set environment variables
ENV PORT 3001
ENV NODE_ENV development

# Start the development server
CMD ["yarn", "dev"]
