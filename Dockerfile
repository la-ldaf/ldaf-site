FROM node:alpine
WORKDIR /app

USER root
RUN apk add --update --no-cache make python3 g++
RUN chown node:node .

USER node:node
COPY --chown=node:node package.json .
COPY --chown=node:node package-lock.json .
RUN npm install

COPY --chown=node:node . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
