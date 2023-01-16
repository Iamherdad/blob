const crypto = require("crypto");

const md5 = (pwd) => {
  const hash = crypto.createHash("md5");
  hash.update(pwd);
  const md5Password = hash.digest("hex");
  return md5Password;
};

module.exports = md5;
