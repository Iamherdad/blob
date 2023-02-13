import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "../../hooks";
import styles from "./index.module.less";

export default function Navbar(props) {
  const { className } = props;
  const [activeIndex, setActive] = useState(0);
  const [navList, setNavList] = useState([
    {
      title: "主页",
      link: "#",
    },
    {
      title: "作者",
      link: "#",
    },
    {
      title: "文章",
      link: "#",
    },
    {
      title: "github",
      link: "#",
    },
  ]);

  const { scrollTop, clientHeight, scrollHeight } = useScroll();

  const handleClick = (ite, ind) => {
    setActive(ind);
  };

  return (
    <div
      className={classNames(
        className,
        styles.nav,
        scrollTop > 0 ? styles.scrollactive : ""
      )}
    >
      <div className={styles.containar}>
        <div className={styles.left}>标题</div>
        {navList && (
          <ul className={styles.right}>
            {navList.map((ite, ind) => {
              return (
                <li
                  className={classNames(
                    styles.list,
                    activeIndex == ind ? styles.active : ""
                  )}
                  key={ind}
                  onClick={() => handleClick(ite, ind)}
                >
                  {ite.title}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
