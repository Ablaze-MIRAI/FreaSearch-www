FROM node:16-alpine as builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
COPY . ./
RUN apk add tini --no-cache \
 && addgroup app \
 && adduser -D -h /frea -s /bin/sh -G app app \
 && echo "API_URL=https://api.freasearch.org" > .env.local \
 && npm i \
 && yarn build \
 && chown -R app:app /app \
 && rm -rf .git

ENV NODE_ENV=production
USER app

CMD ["/sbin/tini", "--", "node_modules/.bin/next", "start"]
