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

// TODO: Fix underlay scrolling of content when loader is showed;
// TODO: Show/Hide loader from redux, when reduxjs/toolkit will be setuped;

export const Loader = () => {
  return (
    <div className="loader-container">
      <Lottie animationData={loaderAnimation} {...options} />
    </div>
  );
};
