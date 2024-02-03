# Getting Started

These steps will help you with getting set up to contribute to the HMCCAA-Web repo.

1. Clone the repo

    ```sh
    git clone git@github.com:hmcc-global/hmccaa-web.git
    cd hmccaa-web
    ```

1. Install [Docker](https://docs.docker.com/get-docker/).

1. Build and enter into your Docker container:

    ```bash
    docker-compose run --service-ports --build --rm --name web web
    ```

    1. This should bring you into the docker container. Then, from inside:

        ```bash
        # Go into cms directory and start Strapi!
        cd cms
        npm run develop
        ```

    1. Navigate to `localhost:1337/admin` to see Strapi! Now we need to connect it to our frontend.

        a. Once at `localhost:1337/admin`, create your new admin account (or log in).

        b. Navigate to Settings -> API Tokens, and create a new API Token. Make sure to select `Unlimited` token duration and `Full access` token type. Then save, and copy the provided token, for use in the next step.

    1. Create a `.env.development` file in your `frontend/` directory, with the following contents (make sure to ask in chat for the production URL + token):

        ```
        STRAPI_TOKEN=<your token from previous step here>
        STRAPI_API_URL=http://localhost:1337
        STRAPI_PRODUCTION_URL=<production url here>
        STRAPI_SERVER_TOKEN=<token here>
        ```

    1. Pull the necessary data from the production backend:

        ```bash
        ~/pull_strapi_server.sh
        ```

        Now you're ready to connect the frontend!

1. With your web container from the previous steps running, open up *another* terminal window, and run:

        ```bash
        # Connect to the `web` docker container (which we started earlier)
        docker exec -it web /bin/bash
        ```

    1. Then, from inside this new window:

        ```bash
        # Go into frontend directory and start Gatsby!
        cd frontend
        npm run develop
        ```

        Note: the `npm run develop` command for Gatsby supports Webpack, which means that any changes to the `frontend/src/` folders will immediately hot-reload the respective webpages.

1. Navigate to `localhost:8000` to view your website!

1. Whenever you want to exit your docker containers, simply use the `exit` command or just press `Ctrl-D`. When the terminal window which ran the original `docker-compose run` command exits the container, the container will automatically be deleted (note: this will *not* delete your Strapi data). For more Docker tips, see [below](#docker-tips).

1. Now that you've successfully connected your container, in the future, if you want to run both strapi AND gatsby from one terminal window, you can! Simply run:

```bash
# From the root directory (if you're not in the root directory, just run `~/start.sh`)
./start.sh
```

> [!Note]
> Command line output for Gatsby and Strapi will both show up in the one terminal window which `start.sh` is called from. If this is undesired, use the separate `npm run develop` commands in each application's respective directory.

## Docker Tips

Here are some helpful commands to run docker!

```bash
# Start and rebuild the `web` container which removes itself when you exit
docker-compose run --service-ports --build --rm --name web web

# Start but don't rebuild
docker-compose run --service-ports --rm --name web web

# Start but don't remove when you exit
docker-compose run --service-ports --build --name web web

# Manually remove `web` container
docker container rm web

# Add another terminal into the `web` container which is already running
docker exec -it web /bin/bash
```
