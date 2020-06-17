FROM nginx:1.17.1-alpine
WORKDIR /weight-watcher
COPY /dist/weight-watcher /usr/share/nginx/html
FROM nginx:1.17.1-alpine
COPY --from=node /weight-watcher/dist/weight-watcher /usr/share/nginx/html