FROM node:18-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/frontend/
COPY package.json ./
RUN npm install
ENV PATH /opt/frontend/node_modules/.bin:$PATH

COPY . .
RUN chown -R node:node /opt/frontend
USER node
RUN gatsby telemetry --disable
# RUN rm -rf ./.cache/.parcel-cache
RUN ["npm", "run", "build"]
EXPOSE 8000
CMD ["npm", "run", "develop"]
