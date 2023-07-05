#!/bin/sh

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

docker stop docs
docker run -it --init -dp 4000:4000  -v `pwd`:`pwd` -w `pwd` --name docs --rm $(docker build -t docs -q .) honkit serve
# sed -e "s/<li>\n        <a href=\"https:\/\/github.com\/honkit\/honkit\" target=\"blank\" class=\"gitbook-link\">\n            Published with HonKit\n        <\/a>\n    <\/li>//g" -i.backup ./_book/index.html

sleep 5
sudo sed -e "s/github.com\/honkit\/honkit/annarbor.hmcc.net/g" -i.backup $SCRIPT_DIR/_book/*.html
sudo sed -e "s/Published with HonKit/HMCCAA Website Docs/g" -i.backup $SCRIPT_DIR/_book/*.html