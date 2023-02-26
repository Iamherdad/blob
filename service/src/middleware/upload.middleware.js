const multer = require('@koa/multer')  
const fs  =require('fs')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,`../static/img/temp`))
    },
    filename: function (req, file, cb) {
        let type = file.originalname.split('.')[1]
        cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`)
    }
})
//文件上传限制
const limits = {
    fields: 10,//非文件字段的数量
    fileSize: 500 * 1024,//文件大小 单位 b
    files: 1//文件数量
}
const upload = multer({storage,limits}).single('file')


class UploadMiddleware{
   async fileUpload(ctx,next){
    let err = await upload(ctx,next).then(res=>res).catch(err=>err)
    if(err){
        return ctx.app.emit("error", "FTOO_MANY_FILES", ctx);
        
    }
    }
    
}

module.exports = new UploadMiddleware