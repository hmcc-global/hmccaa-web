#!/bin/bash

docker stop docs || echo "No need to stop docs container, did not find one running."
docker run -it --init -dp 4000:4000  -v `pwd`:`pwd` -w `pwd` --name docs --rm $(docker build -t docs -q .) honkit serve
