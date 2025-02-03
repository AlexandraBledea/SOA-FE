FROM node:20-alpine

# Set the working directory
WORKDIR /app

COPY package*.json ./

# Install all the dependencies
RUN npm install

RUN npm install -g @angular/cli

COPY . .

# Generate the build of the application
RUN npm run build

EXPOSE 4202

# Fix file-watching issues inside Docker
ENV CHOKIDAR_USEPOLLING=true

CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]
