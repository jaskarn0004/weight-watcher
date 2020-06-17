FROM nginx:1.17.1-alpine
WORKDIR /weight-watcher
COPY --from=node /weight-watcher/dist/weight-watcher /usr/share/nginx/html