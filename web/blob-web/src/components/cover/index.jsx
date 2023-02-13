import React from "react";
import styles from "./index.module.less";
export default function Cover(props) {
  const { handleClick } = props;

  return (
    <div className={styles.cover}>
      <div className={styles.img}>
        <img src="https://evan.beee.top/img/redefine-1-final.webp" alt="" />
      </div>
      <div className={styles.container}>
        <h3 className={styles.title}>主题样式 Demo</h3>
        <div className={styles.content}>
          H1 标题H2 标题H3 标题H4标题H5 标题H6 标题加粗 斜体 删除线 这是一段文本
          行内代码 1代码块 1print("代码高亮") 功能展示Font Awesome 6.1.0Solid:
          Regular:...
        </div>
        <div className={styles.footer}>
          <div className={styles.createtime}>2022/10/02 </div>
          {/* <div className={styles.updatatime}>2022/10/02 </div> */}
          <div className={styles.more} onClick={handleClick}>
            更多
          </div>
        </div>
      </div>
    </div>
  );
}
