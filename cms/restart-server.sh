#!/bin/sh

NODE_ENV=development npm run build
pm2 restart strapi