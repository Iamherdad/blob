const jwt = require("jsonwebtoken");
const { PRI_KEY } = require("../config/secret");
class UserController {
  async login(ctx, next) {
    const { username, id } = ctx.user;

    const token = jwt.sign({ username, id }, PRI_KEY, {
      expiresIn: "8h",
      algorithm: "RS256",
    });
    const refreshToken = jwt.sign({ username, id }, PRI_KEY, {
      expiresIn: "12h",
      algorithm: "RS256",
    });
    ctx.body = {
      code: 1000,
      msg: "登录成功",
      data: {
        userinfo: ctx.user[0],
        token,
        refreshToken,
      },
    };
  }
}

module.exports = new UserController();
