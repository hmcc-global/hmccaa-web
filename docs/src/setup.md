# Getting Started

These steps will help you with getting set up to contribute to the HMCCAA-Web repo.
1. Install [Docker](https://docs.docker.com/get-docker/).

1. <b>Cloning the Repository</b>

    Set up Git on your computer, and clone the repository:
    ```sh
    git clone git@github.com:hmcc-global/hmccaa-web.git
    cd hmccaa-web
    ```

    1. Create configuration files `cms/.env` and `frontend/.env.development` (see below).

        1. Create `cms/.env` as following and request the keys/secrets from the team admin 
            ```
            HOST=0.0.0.0
            PORT=1337
            APP_KEYS= <API_KEY>
            API_TOKEN_SALT=<TOKEN>
            ADMIN_JWT_SECRET=<ADMIN JWT SECRET>
            TRANSFER_TOKEN_SALT=<REQUEST THIS TOKEN_SALT>

            # Database
            DATABASE_CLIENT=mysql
            DATABASE_PORT=3306

            DATABASE_NAME=strapi_aa
            MYSQL_DATABASE=strapi_aa

            DATABASE_USERNAME=strapi_aa
            MYSQL_USER=strapi_aa

            DATABASE_PASSWORD=<REQUEST THIS DB PASSWORD>
            MYSQL_PASSWORD=<REQUEST THIS MYSQL PASSWORD>
            MYSQL_ROOT_PASSWORD=<REQUEST THIS MYSQL ROOT PASSWORD>

            DATABASE_SSL=false
            JWT_SECRET=<SECRET>
            ``` 
        2. Create `frontend/.env.development` and request `STRAPI_PRODUCTION_TOKEN` from the team admin
            ```
            STRAPI_TOKEN=<FILL OUT LATER>
            STRAPI_API_URL=http://localhost:1337
            STRAPI_PRODUCTION_URL=https://content.annarbor.hmcc.net/admin
            STRAPI_PRODUCTION_TOKEN=<REQUEST THIS TOKEN>
            ```

1. <b>Strapi CMS Setup</b>

    Build and enter into your Docker container:

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


    1. In `.env.development` file in your `frontend/` directory, fill our `STRAPI_TOKEN` with the token you copied from the previous step, i.e.

        ```
        STRAPI_TOKEN=<your token from previous step here>
        ```

    1. Pull the necessary data from the production backend:

        ```bash
        ~/pull_strapi_server.sh
        ```

        Now you're ready to connect the frontend!

1. <b>Frontend Setup</b>

    With your web container from the previous steps running, open up *another* terminal window, and run:

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

        <details>
            <summary><b>Debugging Tips:</b></summary>
            <ul>If you encountered <tt>ModuleNotFoundError</tt>, double check whether the
                    correct <tt>STRAPI_TOKEN</tt> is in the <tt>frontend/.env.development</tt> file. Try regenerating the token in Strapi and update the <tt>.env.development</tt> file.</ul>
        </details>
     
    1. Navigate to `localhost:8000` to view your website!

1. <b>Exiting and Relaunching the Site</b>

    Whenever you want to exit your docker containers, simply use the `exit` command or just press `Ctrl-D`. When the terminal window which ran the original `docker-compose run` command exits the container, the container will automatically be deleted (note: this will *not* delete your Strapi data). For more Docker tips, see [below](#docker-tips).

    Now that you've successfully connected your container, in the future, if you want to run both strapi AND gatsby from one terminal window, you can! Simply run:

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
