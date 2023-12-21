#!/bin/sh

# This file is used for restarting strapi.
# It is run by the server's cron job whenever a new change is pushed.

NODE_ENV=production npm run build
pm2 restart strapi
