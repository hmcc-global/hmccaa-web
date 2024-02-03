#!/bin/sh
# Pull from Strapi server
#
# Note that this can only be run while Strapi is already running.

cd ~/cms && npm run strapi transfer -- --from $STRAPI_PRODUCTION_URL --from-token $STRAPI_PRODUCTION_TOKEN --force