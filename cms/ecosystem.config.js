// This file is used for configuring the `pm2` process which manages our
// CMS binary's lifetime on the server.
// <https://pm2.keymetrics.io/docs/usage/application-declaration/>

// To start:
// `pm2 start ecosystem.config.js`
//
// To restart:
// `pm2 restart strapi`

module.exports = {
  apps: [
    {
      name: "strapi",
      script: "npm run start",
      env: {
        NODE_ENV: "production",
        DATABASE_POOL_MAX: "64",
      },
    },
  ],
};
