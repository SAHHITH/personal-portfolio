# Use the AMD64 Linux platform explicitly
FROM --platform=linux/amd64 node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy application source
COPY . .

# Build Vite application
RUN npm run build


# Production stage
FROM --platform=linux/amd64 nginx:alpine

# Copy production build
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]