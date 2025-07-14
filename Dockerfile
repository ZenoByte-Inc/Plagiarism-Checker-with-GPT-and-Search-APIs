# Stage 1: Dependencies and Build
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first (for better caching)
COPY package.json ./
RUN npm install --frozen-lockfile

# Copy source code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Production runtime
FROM node:22-alpine AS runner

WORKDIR /app

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nextjs

# Set environment variables
ENV NODE_ENV production
ENV PORT 3002

# Copy only necessary files from the builder stage
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/next.config.js ./next.config.js

# Use the non-root user
USER nextjs

# Expose the port
EXPOSE 3002

# Run the application
CMD ["npm", "start"]