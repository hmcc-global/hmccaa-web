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

## Pushing Code into Remote Repository

When pushing code into the remote repository, there are two checks before they push the code
- Linting process for ```frontend```'s directoy
- Prettify Code for ```frontend```'s directory

If there is a lint issue, need to correct the lint issue and commit the code. Then you can push the code.

If the pre-push process prettify the code, need to commit the code. Then you can push the code.

If the two checks pass, then the code will be push into remote respository. 

If you want to avoid this pre-push proces, then add ```--no-verify``` to the ```git push``` command

Here are examples to how to do it:
```sh
    git push --no-verify
```

or 

```sh
git push --force-with-lease --no-verify
```
[This option is usually used after rebase current branch with main branch]