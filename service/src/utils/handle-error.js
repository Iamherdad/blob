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
      message.code = "-1005";
      message.msg = "用户信息校验失败";
      ctx.status = 401;
      break;
    
    case "NOT_FILE":
      message.code = "-1006";
      message.msg = "文件不能为空";
      break;
    case "FTOO_MANY_FILES":
      message.code = "-1007";
      message.msg = "超出最大文件上穿限制";
      break;
    case "FILE_UPLOAD_ERROR":
      message.code = "-1008";
      message.msg = "上传失败请稍后再试";
      break;
    case "REFRESH_ERROR":
      message.code = "-1007";
      message.msg = "token刷新失败";
      ctx.status = 402;
      break;
      case "INVALID_TOKEN" :
        message.code="-1008";
        message.msg="无效请求",
        ctx.status=402;
        break 
  }

  return (ctx.body = message);
});
