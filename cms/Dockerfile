ARG TARGETPLATFORM
FROM --platform=linux/arm64 hmccaa/hmcc-web:strapi-0.1.1-arm
FROM --platform=linux/amd64 hmccaa/hmcc-web:strapi-0.1.2

USER node
EXPOSE 1337
CMD ["npm", "run", "develop"]
