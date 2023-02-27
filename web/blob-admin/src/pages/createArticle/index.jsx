import { Button, Input, Popover } from "antd";
import React, { useState, useEffect } from "react";
import Bytemd from "../../components/markdown";

import styles from "./index.module.less";

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

  const handleClick = () => {};

  return (
    <div className={styles.createArticle}>
      <div className={styles.header}>
        <Input
          className={styles.left}
          placeholder="请输入标题"
          bordered={false}
        />

        <div className={styles.right}>
          <Popover
            content={
              <div style={{ height: "300px", width: "560px" }}>
                151515151551
              </div>
            }
            title="Title"
            trigger="click"
            placement="bottomLeft"
          >
            <Button type="primary" onClick={handleClick}>
              发布
            </Button>
          </Popover>
        </div>
      </div>
      <Bytemd value={value || ""} setValue={setValue} />
    </div>
  );
}
