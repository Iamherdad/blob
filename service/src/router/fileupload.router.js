const Router = require("@koa/router");
const { auth } = require("../middleware/login.middleware");
const qiniu = require('qiniu')
const multer = require('@koa/multer')  
const fs  =require('fs')
var accessKey = '1mWRcX8aukr70JbGuuVBEdYMFAT6g_hvGbaNEcXq';
var secretKey = 'IYXfrgdXSK60b93ancT9LHhopjQ8dsH7PP8ASNOF';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
var options = {
  scope: 'lpf-blob',  // 必填, 七牛云控制台添加的空间名称
  expires: 7200,  // expires非必填， 在不指定上传凭证的有效时间情况下，默认有效期为1个小时。expires单位为秒
  returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}' 
  // returnBody非必填， 有时候我们希望能自定义这个返回的JSON格式的内容，可以通过设置returnBody参数来实现。
};
var putPolicy = new qiniu.rs.PutPolicy(options); // 配置
var uploadToken = putPolicy.uploadToken(mac); // 获取上传凭证
var config = new qiniu.conf.Config();
// 空间对应的机房
config.zone = qiniu.zone.Zone_z2;
var formUploader = new qiniu.form_up.FormUploader(config); 
var putExtra = new qiniu.form_up.PutExtra()





const userRouter = new Router({
  prefix: "/fileupload",
});

userRouter.post("/", auth,multer().single('file'),(ctx,next)=>{
  console.log(ctx.file)
  const buffer = Buffer.from(ctx.file.buffer)
 
 
//     formUploader.putFile(uploadToken, null,file, putExtra, function (respErr, respBody, respInfo) {
//    console.log(respErr,'err')
//    console.log(respBody,'body')
//    console.log(respInfo,'info')
// });


ctx.body="123"
   
});

module.exports = userRouter;
