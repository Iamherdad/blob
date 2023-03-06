const Router = require("@koa/router");
const jwt = require("jsonwebtoken");
const { verifyUser } = require("../middleware/login.middleware");
const { login } = require("../controller/login.controller");
const { PUB_KEY, PRI_KEY } = require("../config/secret");

const userRouter = new Router({
  prefix: "/login",
});

userRouter.post("/", verifyUser, login);

userRouter.post("/refreshToken", (ctx, next) => {
  const { refreshToken } = ctx.request.body;
  
  const authorization = ctx.headers.authorization;

  if (!authorization) {
    return ctx.app.emit("error", "INVALID_TOKEN", ctx);
  }

  const token = authorization.replace("Bearer ", "");

  if ( !refreshToken) {
    return ctx.app.emit("error", "INVALID_TOKEN", ctx);
  }
  console.log(token,'token')
  try {
    const verifyRes = jwt.verify(refreshToken, PUB_KEY);
    console.log(verifyRes, "token");
    const { username, id } = verifyRes;

    const updataToken = jwt.sign({ username, id }, PRI_KEY, {
      expiresIn: "8h",
      algorithm: "RS256",
    });
    const updataRefreshToken = jwt.sign({ username, id }, PRI_KEY, {
      expiresIn: "12h",
      algorithm: "RS256",
    });
    ctx.body = {
      code: 1000,
      msg: "token更新成功",
      data: {
        token: updataToken,
        refreshToken: updataRefreshToken,
      },
    };
  } catch (err) {
    console.log(err, "error");
    return ctx.app.emit("error", "REFRESH_ERROR", ctx);
  }
});
module.exports = userRouter;
