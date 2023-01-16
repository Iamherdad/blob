const { removeSpace } = require("../utils/index");
const { findUser } = require("../service/user.service");
const md5 = require("../utils/handle-md5");
class UserMiddleWare {
  async verifyUser(ctx, next) {
    const { username, password } = ctx.request.body;
    if (!removeSpace(username) && !removeSpace(password)) {
      return ctx.app.emit("error", "DATA_NULL", ctx);
    }

    const findRes = await findUser(username);
    if (findRes.length) {
      return ctx.app.emit("error", "USER_EXIST", ctx);
    }

    ctx.user = {
      username: removeSpace(username),
      password: removeSpace(password),
    };
    await next();
  }

  async encryptPwd(ctx, next) {
    const { password } = ctx.user;
    const cryptoPwd = md5(password);
    ctx.user.password = cryptoPwd;
    await next();
  }
}

module.exports = new UserMiddleWare();
