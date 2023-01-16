const Router = require("@koa/router");
const { create } = require("../controller/user.controller");
const { verifyUser, encryptPwd } = require("../middleware/user.middleware");
// const fs = require("fs");
// const path = require("path");

const userRouter = new Router({
  prefix: "/user",
});

userRouter.post("/", verifyUser, encryptPwd, create);

// userRouter.get("/:id/avatar", (ctx, next) => {
//   ctx.response.set("content-type", "image/png");
//   ctx.body = fs.createReadStream(
//     path.resolve(__dirname, "../static/img/avatar.png")
//   );
// });

module.exports = userRouter;
