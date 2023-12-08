#!/bin/sh
# Waits for strapi server to be up then
# executes command given in input args

set -e

cmd="$@"
until $(curl --output /dev/null --silent --head --fail $STRAPI_API_URL); do
    >&2 echo  "Strapi is unavailable at '$STRAPI_API_URL' - sleeping"
    sleep 5
done

>&2 echo "Strapi is up - executing '$cmd'"
exec $cmd