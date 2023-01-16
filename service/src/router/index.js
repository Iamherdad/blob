const fs = require("fs");
const path = require("path");

const registerRouters = (app) => {
  const routerList = fs.readdirSync(__dirname);
  for (const file of routerList) {
    if (!file.endsWith(".router.js")) continue;
    const router = require(`./${file}`);
    app.use(router.routes()).use(router.allowedMethods());
  }
};

module.exports = registerRouters;
