#!/bin/sh
# Setup container

# Install dependencies
cd /home/node/frontend && npm install --unsafe-perm
cd /home/node/frontend && npm run gatsby telemetry --disable
cd /home/node/cms && npm install --unsafe-perm
