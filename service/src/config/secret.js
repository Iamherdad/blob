const fs = require("fs");
const path = require("path");
const PRI_KEY = fs.readFileSync(path.resolve(__dirname, "./keys/pri.key"));
const PUB_KEY = fs.readFileSync(path.resolve(__dirname, "./keys/pub.key"));

module.exports = {
  PRI_KEY,
  PUB_KEY,
};
