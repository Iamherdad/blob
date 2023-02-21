import React, { useState, useEffect } from "react";
import Bytemd from "../../components/markdown";
export default function CreateArticle() {
  const [value, setValue] = useState("");
  useEffect(() => {
    getDetail();
  }, []);
  // 获取数据
  const getDetail = async () => {
    // const res = await getArticleDetail({ id: query.id });
    // if (res.code === 200) {
    //   setValue(res.data.content); // 赋值
    // }
  };

  return (
    <div>
      <Bytemd value={value || ""} setValue={setValue} />
    </div>
  );
}
