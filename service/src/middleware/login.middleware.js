const { removeSpace } = require("../utils/index");
const { findUser } = require("../service/user.service");
const md5 = require("../utils/handle-md5");
const jwt = require("jsonwebtoken");
const { PUB_KEY } = require("../config/secret");

class LoginMiddleWare {
  async verifyUser(ctx, next) {
    const { username, password } = ctx.request.body;

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

    ctx.user = findRes[0];
    delete findRes.password;
    await next();
  }
  async auth(ctx, next) {
    const authorization = ctx.headers.authorization;
    if (!authorization) {
      return ctx.app.emit("error", "NOT_AUTH", ctx);
    }
    const token = authorization.replace("Bearer ", "");

    try {
      const verifyRes = jwt.verify(token, PUB_KEY);

      ctx.user = verifyRes;
      await next();
    } catch (err) {
      // console.log(err.message, "token校验失败");
      return ctx.app.emit("error", "NOT_AUTH", ctx);
    }
  }
}

module.exports = new LoginMiddleWare();
