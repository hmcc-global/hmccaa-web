# HMCCAA Website Documentation

This is the main documentation hub for everything regarding the HMCC Ann Arbor Website.

## Architecture

This repo is split into three sections: `frontend/` and `cms/` for the `annarbor.hmcc.net` website, and `docs/` for this documentation site. The frontend uses [Gatsby](https://www.gatsbyjs.com/) (a React framework) to serve as a frontend for our website, and [Strapi](https://strapi.io/) as our CMS ([Content Management Service](https://kinsta.com/knowledgebase/content-management-system/)) serves the data provided to the website. For more information about the documentation site, see the [Documentation Server](./src/docs.md) page.

Currently, we can only run the CMS locally - thus, your own locally-deployed version will contain the necessary structures that our CMS provides, but none of the data.

To begin contributing to this project, follow the next section to set up your development environment. With just a few commands, you will create *two* Docker containers:

- `web`: Your daily development docker container, which contains your code and allows you to deploy both a local version of our CMS and a local version of our frontend website.
- `strapiDB`: a MySQL database which holds the data used by Strapi in your `web` container.

## Getting Started

See the [Setup docs](./src/setup.md).

### Developing with Custom Links

Links all look like

`<Link href="some external site" prop1=x prop2=y>Click here</Link>`

or

`<Link to="some internal page" prop1=x prop2=y>Click here</Link>`

*href* must be defined for an external link

*to* must be defined for internal page, otherwise it redirects to home page

any props can be passed down all the way to the original `<a>` or `<GatsbyLink>` element defined in components/Link.js

children can also be rendered in Link, in case you want to wrap this around some arbitrary element

## FAQ

**Q**: My Docker image is giving me `bad_alloc` errors when trying to start up! How do I fix this?

**A**: You are likely out of system space. Try running `docker system prune -af` to clear up some space.

**Q**: I am hitting the error `failed to solve: error from sender: open /path/to/repo/frontend/.cache/redux: permission denied`.

**A**: Try deleting your gatsby cache: `sudo rm -rf /path/to/repo/frontend/.cache`
