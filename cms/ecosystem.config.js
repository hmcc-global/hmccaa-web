module.exports = {
  apps: [
    {
      name: "strapi",
      script: "npm run start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
