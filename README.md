# hmccaa-web

2023 Rewrite of HMCC Ann Arbor website

## Architecture

This repo is split into two sections: `frontend/` and `cms/`. The frontend uses [Gatsby](https://www.gatsbyjs.com/) (a React framework) to serve as a frontend for our website, and [Strapi](https://strapi.io/) as our CMS ([Content Management Service](https://kinsta.com/knowledgebase/content-management-system/)) serves the data provided to the website.

Currently, we can only run the CMS locally - thus, your own locally-deployed version will contain the necessary structures that our CMS provides, but none of the data.

To begin contributing to this project, follow the next section to set up your development environment. With just a few commands, you will create *three* Docker containers:

- `gatsby`: a locally deployed version of our frontend website
- `strapi`: a locally deployed version of our CMS
- `strapiDB`: a MySQL database which holds the data used by `strapi`.

Furthermore, both `gatsby` and `strapi` will be supported by Webpack, which means that any changes to the `gatsby/src/` and `strapi/src/` folders will immediately hot-reload the respective frontend pages.

## Getting Started

1. Clone the repo

    ```sh
    git clone git@github.com:hmcc-global/hmccaa-web.git
    cd hmccaa-web
    ```

2. Install [Docker](https://docs.docker.com/get-docker/).

3. Log into Docker - contact one of the existing team members for the proper credentials.

4. Build with Docker:

    ```sh
    docker compose up
    ```

5. Navigate to `localhost:1337/admin` to see Strapi, and `localhost:8000` to view your website!

### Full build

If you add more dependencies (eg. in the package.json), they will not be reflected when running `docker compose up` as in the previous commands. You will instead need to run a fresh build of the container from scratch:

```sh
docker compose -f docker-compose-fullbuild.yml up --build
```

Then, once changes have been checked in, we can push those changes into a new version of the base Docker image for others to reuse.

## FAQ

**Q**: Why do neither project have a `package-lock.json` file?

**A**: The `package.json` file is copied to the Docker container before `npm install` is run. Thus, neither the `node_modules/` folder nor `package-lock.json` file should end up in your local directory.

**Q**: My Docker image is giving me `bad_alloc` errors when trying to start up! How do I fix this?

**A**: You are likely out of system space. Try running `docker system prune -af` to clear up some space.
