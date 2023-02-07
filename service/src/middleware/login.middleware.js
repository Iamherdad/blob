const { removeSpace } = require("../utils/index");
const { findUser } = require("../service/user.service");
const md5 = require("../utils/handle-md5");

class LoginMiddleWare {
  async verifyUser(ctx, next) {
    const { username, password } = ctx.request.body;
    console.log(ctx.request.body)
    if (!removeSpace(username) && !removeSpace(password)) {
      return ctx.app.emit("error", "DATA_NULL", ctx);
    }

    const findRes = await findUser(removeSpace(username));
    if (!findRes.length) {
      return ctx.app.emit("error", "USER_NOT_EXIST", ctx);
    }

    const { password: dbPwd, id } = findRes[0];
    if (md5(password) !== dbPwd) {
      return ctx.app.emit("error", "USER_PWD_ERROR", ctx);
    }
    ctx.user = findRes;
    delete findRes.password;
    await next();
  }
}

module.exports = new LoginMiddleWare();
