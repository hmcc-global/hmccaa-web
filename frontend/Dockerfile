ARG TARGETPLATFORM
FROM --platform=linux/arm64 hmccaa/hmcc-web:gatsby-0.1.3-arm
FROM --platform=linux/amd64 hmccaa/hmcc-web:gatsby-0.1.4

USER node
COPY ./scripts ./scripts
COPY ./.env.development .
COPY ./gatsby-config.js .
EXPOSE 8000
CMD ["sh", "./scripts/wait-for-strapi.sh", "npm", "run", "develop"]
