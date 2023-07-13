FROM node:hydrogen-alpine
WORKDIR /app

USER root
RUN apk add --update --no-cache make python3 g++
RUN chown node:node .

USER node:node

COPY --chown=node:node package.json .
COPY --chown=node:node package-lock.json .
RUN npm ci

COPY --chown=node:node . .
