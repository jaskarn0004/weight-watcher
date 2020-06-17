FROM nginx:1.17.1-alpine
#WORKDIR /weight-watcher
COPY /dist/weight-watcher /usr/share/nginx/html
#RUN npm install
#RUN npm run build --prod
#FROM nginx:1.17.1-alpine
#COPY --from=node /weight-watcher/dist/angular-app /usr/share/nginx/html
