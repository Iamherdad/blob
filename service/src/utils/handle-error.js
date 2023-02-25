const app = require("../app/index");

app.on("error", (errType, ctx) => {
  const message = {
    msg: "ok",
    code: 1000,
  };

  switch (errType) {
    case "DATA_NULL":
      message.code = "-1001";
      message.msg = "数据为空";
      break;
    case "USER_EXIST":
      message.code = "-1002";
      message.msg = "用户已存在";
      break;
    case "USER_NOT_EXIST":
      message.code = "-1003";
      message.msg = "用户不存在";
      break;
    case "USER_PWD_ERROR":
      message.code = "-1004";
      message.msg = "密码错误";
      break;
    case "NOT_AUTH":
      message.code="-1005";
      message.msg="用户信息校验失败"  
  }

  return (ctx.body = message);
});
