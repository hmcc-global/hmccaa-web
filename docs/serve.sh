#!/bin/bash

SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]:-$0}"; )" &> /dev/null && pwd 2> /dev/null; )";

docker stop docs
docker run -it --init -dp 4000:4000  -v `pwd`:`pwd` -w `pwd` --name docs --rm $(docker build -t docs -q .) honkit serve

sleep 5
ls $SCRIPT_DIR
sudo sed -e "s/github.com\/honkit\/honkit/annarbor.hmcc.net/g" -i.backup $SCRIPT_DIR/_book/*.html
sudo sed -e "s/Published with HonKit/annarbor.hmcc.net/g" -i.backup $SCRIPT_DIR/_book/*.html
sudo sed -e "s/HonKit<\/title>/HMCC Docs<\/title>/g" -i.backup $SCRIPT_DIR/_book/*.html
