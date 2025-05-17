module.exports = {
  apps: [
    {
      name: "house-finder",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
