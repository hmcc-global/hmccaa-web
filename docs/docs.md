# Documentation Server

This page contains all documentation regarding the [hmcc-global.github.io/hmccaa-web] site which hosts this documentation you are reading.

## Deploying

To deploy changes, simply create a PR. This site will be automatically redeployed on every push to the main branch which edits the `docs/` folder.

## Viewing locally

Prequisite: Install honkit.

```sh
cd docs
npm install
```

Then, to run the documentation server locally:

```sh
# Run inside docs/ folder
sh serve.sh
```

This command starts up a container with the documentation server, and removes the "Published by HonKit" line at the bottom left of the page.

Alternatively, to just start up the container and build the server (without replacing HonKit advertisements), run:

```sh
docker run -it --init -dp 4000:4000  -v `pwd`:`pwd` -w `pwd` --name docs --rm $(docker build -t docs -q .) honkit serve
```
