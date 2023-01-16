const jwt = require("jsonwebtoken");
const { PRI_KEY } = require("../config/secret");
class UserController {
  async login(ctx, next) {
    const { username, id } = ctx.user;
    const token = jwt.sign({ username, id }, PRI_KEY, {
      expiresIn: "4h",
      algorithm: "RS256",
    });

    ctx.body = {
      code: 1000,
      msg: "登录成功",
      data: {
        userinfo: ctx.user,
        token,
      },
    };
  }
}

module.exports = new UserController();
