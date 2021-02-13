FROM node:10-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm add @ng-bootstrap/ng-bootstrap@3
RUN npm i @angular-devkit/core
RUN  $(npm bin)/ng build --prod

# stage 2
FROM nginx:1.14.1-alpine
COPY --from=builder /app/dist/gfunds-frontend /usr/share/nginx/html

