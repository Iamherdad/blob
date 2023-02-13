import React from "react";
import styles from "./index.module.less";
export default function Welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.container}>
        <div className={styles.desc}>welcome</div>
        <ul className={styles.link}>
          <li>qq</li>
          <li>微信</li>
          <li>apple</li>
        </ul>
      </div>
    </div>
  );
}
