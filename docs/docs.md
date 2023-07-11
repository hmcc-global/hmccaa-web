# Documentation Server

This page describes the process for this current github.io server.

## Deploying

To deploy changes to the

## Viewing locally

To install honkit, run:

```sh
cd docs
npm install
```

Then, to run the documentation server locally:

```sh
sh serve.sh
```

This command starts up a container with the documentation server, and removes the "Published by HonKit" line at the bottom left of the page.

Or alternatively, to just start up the container, run:

```sh
docker run -it --init -dp 4000:4000  -v `pwd`:`pwd` -w `pwd` --name docs --rm $(docker build -t docs -q .) honkit serve
```
