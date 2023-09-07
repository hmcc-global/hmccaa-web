#!/bin/sh

# This file is used for restarting strapi.
# It is run by the server's cron job once a day.

NODE_ENV=development npm run build
pm2 restart strapi
