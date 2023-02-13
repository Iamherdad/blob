import classNames from "classnames";
import React from "react";
import styles from "./index.module.less";
export default function Navbar(props) {
  const { className } = props;
  const classname = classNames(className, styles.nav);
  return (
    <div className={classname}>
      <div className={styles.containar}></div>
    </div>
  );
}
