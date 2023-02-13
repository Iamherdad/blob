import { useState, useEffect } from "react";

const getPosition = () => {
  return {
    clientHeight: document.documentElement.clientHeight,
    scrollTop: document.documentElement.scrollTop,
    scrollHeight: document.documentElement.scrollHeight,
  };
};
export const useScroll = () => {
  const [position, setPosition] = useState(getPosition());
  useEffect(() => {
    const handler = () => {
      setPosition(getPosition());
    };

    document.addEventListener("scroll", handler);
    return () => {
      document.removeEventListener("scroll", handler);
    };
  }, []);
  return position;
};
