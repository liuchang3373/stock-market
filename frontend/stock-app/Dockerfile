# stage 1

#FROM node:alpine AS my-app-build
#WORKDIR /app
#COPY stock-app ./stock-app
#WORKDIR '/app/stock-app'
#RUN ls /app/stock-app
#RUN npm install && npm run build

# stage 2

#FROM nginx:alpine
#COPY --from=my-app-build /app/stock-app/dist /usr/share/nginx/html
#EXPOSE 80


FROM nginx:alpine
COPY /stock-app/dist /usr/share/nginx/html
EXPOSE 80