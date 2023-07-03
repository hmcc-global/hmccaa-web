ARG TARGETPLATFORM
FROM --platform=linux/arm64 hmccaa/hmcc-web:gatsby-0.1.1
FROM --platform=linux/amd64 hmccaa/hmcc-web:gatsby-0.1.2

USER node
EXPOSE 8000
CMD ["npm", "run", "develop"]
