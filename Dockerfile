FROM node:18-alpine

USER root

RUN apk add --no-cache bash vim
# Needed only for arm64 architectures
RUN apk add --no-cache make gcc g++ python3 curl

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

COPY ./setup /home/node/setup
COPY ./setup/.bashrc /home/node/.bashrc
COPY ./setup/start.sh ./setup/pull_strapi_server.sh /home/node/
RUN chmod -R +x /home/node/setup/init.sh /home/node/start.sh /home/node/pull_strapi_server.sh

COPY ./frontend /home/node/frontend
COPY ./cms /home/node/cms

RUN /home/node/setup/init.sh

EXPOSE 8000 1337

WORKDIR /home/node/
ENV HOME=/home/node
