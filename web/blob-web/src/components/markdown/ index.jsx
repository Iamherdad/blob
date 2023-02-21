import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // 划线、表、任务列表和直接url等的语法扩展
import rehypeRaw from "rehype-raw"; // 解析标签，支持html语法
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // 代码高亮
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import "github-markdown-css";
import styles from "./index.module.less";

import { useEffect } from "react";

export default function Markdown() {
  const markdown = `# Hello lpf-ui

  ## lpf-ui，是一款基于 React + TypeScript 开发的个人组件库 🎉。
  
  ## 开始使用
  
  #### 使用 npm 或 yarn 安装
  
   `;
  return (
    <div className={styles.markdown}>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm, { singleTilde: false }]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={tomorrow}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
}
