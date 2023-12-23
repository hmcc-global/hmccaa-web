#!/bin/sh

# This file is used for restarting strapi.
# It is run by the server's cron job whenever a new change is pushed.

# Load nvm if it doesn't exist
[ -z "${NVM_DIR}" ] && export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Restart server
npm install
NODE_ENV=production npm run build
pm2 restart strapi
