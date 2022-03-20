import React from "react";
import Lottie from "react-lottie";

import * as animationData from "./loading-data.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie className="load-wrap" options={defaultOptions} />;
};

export default Loading;
