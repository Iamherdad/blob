import classNames from "classnames";
import React from "react";
import "./index.module..less";
export default function Navbar(props) {
  const { className } = props;
  const classname = classNames(className, "nav");
  return (
    <div className={classname}>
      <div className="containar"></div>
    </div>
  );
}
