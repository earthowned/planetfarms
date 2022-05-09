import { useSelector } from "react-redux";
import Lottie from "lottie-react";

import { LoaderModal } from "common/modal";
import { selectIsLoading } from "store/loader/selectors";
import loaderAnimation from "assets/animations/loader.json";

const options = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const LoaderProvider = ({ children }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <LoaderModal visible={isLoading}>
        <Lottie
          animationData={loaderAnimation}
          style={{ width: "100%", height: "100%" }}
          {...options}
        />
      </LoaderModal>
      {children}
    </>
  );
};
