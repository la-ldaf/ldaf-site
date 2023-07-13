FROM ldaf-site-base
WORKDIR /app

# USER node:node
RUN npm run build
EXPOSE 4173
