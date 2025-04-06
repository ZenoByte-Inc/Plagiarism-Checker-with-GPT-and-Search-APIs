FROM node:20-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json pnpm-lock.yaml* ./

# Install pnpm globally first
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile  

# Copy the rest of the application
COPY . .

# Build Next.js
RUN pnpm build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

# Copy built files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./

# Create necessary directories

EXPOSE 3000

ENV PORT 3000

CMD ["pnpm", "start"]