FROM node:14-alpine AS builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
CMD ["npm", "start"]

FROM nginx:1.21.0-alpine AS production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
# FROM node:14-alpine AS builder
# WORKDIR /app
# COPY . .
# RUN npm install 
# RUN npm run build
# FROM node:14-alpine AS runner
# WORKDIR /app 
# COPY . .
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# EXPOSE 8080
# CMD ["npm", "start"]