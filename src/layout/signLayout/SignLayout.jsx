import Logo from "../../components/logo/Logo";
import Banner from "./banner/Banner";

import "./SignLayout.scss";

const SignLayout = ({ children }) => {
  return (
    <div className="sign-layout">
      <div className="wrapper">
        <div className="form">
          <div className="icons">
            <Logo />
          </div>
          {children}
        </div>
        <Banner />
      </div>
    </div>
  );
};

export default SignLayout;
