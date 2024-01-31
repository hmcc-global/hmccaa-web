FROM node:18-alpine

USER root

RUN apk add --no-cache bash vim
# Needed only for arm64 architectures
RUN apk add --no-cache make gcc g++ python3 curl

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

COPY ./setup /home/node/setup
COPY ./setup/.bashrc /home/node/.bashrc
RUN chmod -R +x /home/node/setup/init.sh
RUN chown -R node:node /home/node/

USER node
COPY ./frontend /home/node/frontend
COPY ./cms /home/node/cms

USER root
RUN /home/node/setup/init.sh

USER node
EXPOSE 8000 1337

WORKDIR /home/node/
ENV HOME=/home/node
