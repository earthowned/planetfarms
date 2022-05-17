import React from "react";
import Lottie from "lottie-react";

import loaderAnimation from "assets/animations/loader.json";

import "./styles.scss";

const options = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const ComponentLoader = ({ width = "100%", height = "100%" }) => {
  return (
    <div className="component-loader-container">
      <Lottie
        animationData={loaderAnimation}
        style={{ width, height }}
        {...options}
      />
    </div>
  );
};
