import React, { useContext, useEffect } from "react";
import useZlbInit from "@/hook/useZlbInit";
import { setAppStartTime } from "@/utils/wechatEventTracking";
import { useLocalStorage } from "react-use";

const Home = () => {
  const [isRender, setIsRender, removeIsRender] = useLocalStorage("isRender");

  useEffect(() => {
    console.log("进入首页的次数");

    removeIsRender();
    // 微信起始埋点
    setAppStartTime();
    useZlbInit();

    return () => {
      useZlbInit;
    };
  }, []);

  return <></>;
};
export default Home;
