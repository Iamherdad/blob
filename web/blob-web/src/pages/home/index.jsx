import React, { useMemo } from "react";
import Navbar from "../../components/navbar";
import Progress from "../../components/Progress";
import { useScroll } from "../../hooks";
import ArticleList from "../articleList";
import Welcome from "../welcome";

export default function Home() {
  const { scrollTop, clientHeight, scrollHeight } = useScroll();
  const percent = useMemo(() => {
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
  }, [scrollTop, clientHeight, scrollHeight]);

  return (
    <div className="home">
      <Progress percent={percent} color="green" />
      <Navbar />
      <Welcome />
      <ArticleList />
    </div>
  );
}
