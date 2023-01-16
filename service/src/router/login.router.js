const Router = require("@koa/router");
const { verifyUser } = require("../middleware/login.middleware");
const { login } = require("../controller/login.controller");

const userRouter = new Router({
  prefix: "/login",
});

userRouter.post("/", verifyUser, login);

module.exports = userRouter;
