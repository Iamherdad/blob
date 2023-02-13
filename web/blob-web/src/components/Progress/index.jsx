import React from "react";
import classNames from "classnames";
import styless from "./index.module.less";
export default function Progress(props) {
  const { className, percent, style, color } = props;

  return (
    <div
      className={classNames(
        styless.progress,
        className,
        percent > 0 ? styless.show : ""
      )}
      style={{
        width: percent ? `${percent}%` : 0,
        backgroundColor: color || "#005080",
        ...style,
      }}
    ></div>
  );
}
