const Router = require("@koa/router");
const { auth } = require("../middleware/login.middleware");
const qiniu = require("qiniu");
const fs = require("fs");
const path = require("path");
const { fileUpload } = require("../middleware/upload.middleware");
const { resolve } = require("path");

var accessKey = "1mWRcX8aukr70JbGuuVBEdYMFAT6g_hvGbaNEcXq";
var secretKey = "IYXfrgdXSK60b93ancT9LHhopjQ8dsH7PP8ASNOF";
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
var options = {
  scope: "lpf-blob", //七牛云控制台添加的空间名称
  expires: 7200, // 有效期，默认有效期为1个小时。expires单位为秒
  returnBody:
    '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}',
  //自定义返回内容
};
var putPolicy = new qiniu.rs.PutPolicy(options); // 配置
var uploadToken = putPolicy.uploadToken(mac); // 获取上传凭证
var config = new qiniu.conf.Config();
// 空间对应的机房
config.zone = qiniu.zone.Zone_z2;
var formUploader = new qiniu.form_up.FormUploader(config);
var putExtra = new qiniu.form_up.PutExtra();
var bucketManager = new qiniu.rs.BucketManager(mac, config);
var publicBucketDomain = "http://cdn.bilibili.games";

const userRouter = new Router({
  prefix: "/fileupload",
});

userRouter.post("/", auth, fileUpload, async (ctx, next) => {
  const { file } = ctx;
  const { id } = ctx.user;
  console.log(file, "upload");
  try {
    const result = await new Promise((resolve, reject) => {
      formUploader.putFile(
        uploadToken,
        `${id}-${file.filename}`,
        file.path,
        putExtra,
        (respErr, respBody, respInfo) => {
          if (respErr) {
            reject("FILE_UPLOAD_ERROR");
          }
          if (respInfo.statusCode == 200) {
            const publicDownloadUrl = bucketManager.publicDownloadUrl(
              publicBucketDomain,
              respBody.key
            );
            fs.unlinkSync(file.path);
            resolve(publicDownloadUrl);
          } else {
            reject("FILE_UPLOAD_ERROR");
          }
        }
      );
    });
    ctx.body = {
      code: 1000,
      msg: "上传成功",
      data: result,
    };
  } catch (err) {
    return ctx.app.emit("error", err, ctx);
  }
});

module.exports = userRouter;
