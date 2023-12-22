#!/bin/sh

# This script is used by cron jobs to check if new server source files
# have been pushed, and rebuilds/redeploys the CMS server if so.
#
# Lives in `<repo-root>/cron`.

# Logs to log_file declared below
# To see crontab logs, run:
#     sudo cat /var/log/syslog | grep -w 'cron'
log_file="$HOME/annarbor-content/cron/build.log"

RED='\033[0;31m'
GREEN='\033[0;32m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

print_info() {
    time=`date '+%Y-%m-%d %T.%3N'`
    echo "[$time]: $1" >> $log_file
    echo "${CYAN}$1${NC}"
}

latest_build="$HOME/annarbor-content/cron/latest-build"
latest_build_old="$HOME/annarbor-content/cron/latest-build_old"


if ! cmp -s $latest_build $latest_build_old; then
    print_info "Found newer build. Restarting server..."
    cp $latest_build $latest_build_old
    build_log_file="$HOME/build-`date '+%Y-%m-%d%T-%3N'`.log"
    sh $HOME/annarbor-content/scripts/restart-server.sh > $build_log_file && print_info "Build succeeded." || print_info "Build failed."
else
    print_info "Build has not changed."
fi