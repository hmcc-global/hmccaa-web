#!/bin/sh

# This script is used by cron jobs to check if new server source files
# have been pushed, and rebuilds/redeploys the CMS server if so.
#
# Lives in `<repo-root>/cron`.

RED='\033[0;31m'
GREEN='\033[0;32m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

log_file="~/annarbor-content/cron/build.log"

print_info() {
    time=`date +%Y-%m-%d %T.%3N` 
    echo "[$time]: $1"
    echo "${CYAN}$1${NC}"
}

latest_build="~/annarbor-content/cron/latest-build"
latest_build_old="~/annarbor-content/cron/latest-build_old"


if ! cmp -s $latest_build $latest_build_old; then
    print_info "Found newer build. Restarting server..."
    cp $latest_build $latest_build_old
    sh ~/annarbor-content/scripts/restart-server.sh && print_info "Build succeeded." || print_info "Build failed."
else
    print_info "Build has not changed."
fi