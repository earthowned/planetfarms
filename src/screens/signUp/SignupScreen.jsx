import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SignUp from "../../components/signInSignUp/SignUp";
import SignLayout from "../../layout/signLayout/SignLayout";

const SignUpScreen = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const userInfo = window.localStorage.getItem("userInfo");
    if (userInfo) {
      setLoggedIn(true);
      history.push("/");
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  return (
    !loggedIn && (
      <SignLayout>
        <SignUp />
      </SignLayout>
    )
  );
};

export default SignUpScreen;
