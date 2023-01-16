const { create } = require("../service/user.service");
const { SERVER_PORT, HOST } = require("../config/index");
class UserController {
  async create(ctx, next) {
    const { username, password } = ctx.user;

    try {
      const result = await create(
        username,
        password,
        `${HOST}:${SERVER_PORT}/img/default-avatar.png`
      );

      ctx.body = {
        code: 1000,
        msg: "注册成功",
      };
    } catch (err) {
      console.log(err);
      ctx.app.emit("error", "USER_EXIST", ctx);
    }
  }
}

module.exports = new UserController();
