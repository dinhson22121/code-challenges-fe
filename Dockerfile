# Sử dụng Node.js phiên bản LTS làm base image
FROM node:16-alpine AS build

# Đặt thư mục làm thư mục làm việc
WORKDIR /app

# Copy file package.json và package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy toàn bộ dự án vào container
COPY . .

# EXPOSE cổng 3001 (hoặc cổng bạn sử dụng cho ứng dụng React)
EXPOSE 3000

# Lệnh để chạy ứng dụng React
CMD ["npm", "start"]
