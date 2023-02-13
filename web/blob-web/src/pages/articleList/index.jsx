import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cover from "../../components/cover";
import styles from "./index.module.less";
export default function ArticleList() {
  const [contentList, setList] = useState([0, 1, 2, 3, 4, 5, 6]);
  const navigate = useNavigate();
  const handleClick = (ind) => {
    navigate(`/content/${ind}`);
  };
  return (
    <div className={styles.article}>
      {contentList.length ? (
        contentList.map((ite, ind) => {
          return <Cover handleClick={() => handleClick(ind)} key={ind} />;
        })
      ) : (
        <div>空空如也</div>
      )}
    </div>
  );
}
