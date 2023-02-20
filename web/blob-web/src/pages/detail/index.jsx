import React from "react";
import Markdown from "../../components/markdown/ index";
import styles from "./index.module.less";
export default function Detail() {
  return (
    <div className={styles.detail}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Markdown />
        </div>
        <div className={styles.right}>数sdjjjjjjjjj</div>
      </div>
    </div>
  );
}
