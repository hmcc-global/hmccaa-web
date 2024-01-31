#!/bin/sh
# Run Strapi and Gatsby

(cd ~/cms && npm run develop) & (cd ~/frontend && sh scripts/wait-for-strapi.sh npm run develop)