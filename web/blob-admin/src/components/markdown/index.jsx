import React from "react";
import { Editor } from "@bytemd/react";
import zhHans from "bytemd/lib/locales/zh_Hans.json"; // 中文插件
import gfm from "@bytemd/plugin-gfm"; // 支持GFM
import highlight from "@bytemd/plugin-highlight"; // 代码高亮
import "highlight.js/styles/monokai-sublime.css"; // 代码高亮的主题样式(可自选)
import frontmatter from "@bytemd/plugin-frontmatter"; // 解析前题
import mediumZoom from "@bytemd/plugin-medium-zoom"; // 缩放图片
import gemoji from "@bytemd/plugin-gemoji";

import { uploadImg } from "../../service/api/fileUpload";
import { notification } from "antd";
import "bytemd/dist/index.min.css"; // bytemd基础样式必须引入！！！
import "juejin-markdown-themes/dist/juejin.min.css"; // 掘金同款样式

const plugins = [
  gfm(), // GFM
  highlight(), // 代码高亮
  frontmatter(), // 解析前题
  mediumZoom(), // 图片缩放
  gemoji(), // Gemoji短代码
];
const Bytemd = (props) => {
  return (
    <>
      <Editor
        locale={zhHans}
        plugins={plugins}
        value={props.value}
        onChange={(v) => props.setValue(v)}
        uploadImages={async (files) => {
          let imgUrl = "";
          let fromData = new FormData();
          fromData.append("file", files[0]);
          const res = await uploadImg(fromData);
          console.log(res, "res");
          if (res && res.code === 1000) {
            imgUrl = res.data; // 这里是上传成功后，服务端返回的图片地址
          } else {
            notification.error({
              message: "图片上传失败",
            });
          }
          return [
            {
              title: files.map((i) => i.name),
              url: imgUrl,
            },
          ];
        }}
      />
    </>
  );
};
export default Bytemd;
