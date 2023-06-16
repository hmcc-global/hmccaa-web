FROM node:18-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev vips
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/cms/
COPY package.json ./
RUN npm config set fetch-timeout 600000 -g && npm install
ENV PATH /opt/cms/node_modules/.bin:$PATH

COPY . .
RUN chown -R node:node /opt/cms
USER node
RUN ["npm", "run", "build"]
EXPOSE 1337
CMD ["npm", "run", "develop"]
