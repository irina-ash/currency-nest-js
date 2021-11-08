FROM node:16.13.0-alpine3.12 as builder
RUN apk --no-cache add curl
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | sh -s -- -b /usr/local/bin
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --no-optional --ignore-scripts
COPY . .
RUN npm run build
RUN npm prune --production
RUN /usr/local/bin/node-prune

FROM node:16.13.0-alpine3.12 as production
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]
USER node
WORKDIR /usr/src/app
COPY package*.json ./
COPY --from=builder --chown=node:node /usr/src/app/node_modules ./node_modules
COPY --from=builder --chown=node:node /usr/src/app/dist ./dist
COPY --from=builder --chown=node:node /usr/src/app/ormconfig.js ./ormconfig.js
CMD ["node", "dist/main"]
