import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "common/loader";

import { getCurrentUserThunk } from "store/user/thunks";
import { selectCurrentUser } from "store/user/selectors";

// import { checkAndUpdateToken } from "../../actions/userAction";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const [isAuthed, setIsAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      setIsAuthed(false);
      setIsLoading(true);
    }
    if (currentUser) {
      setIsAuthed(true);
      setIsLoading(false);
    }
  }, [currentUser]);

  useEffect(async () => {
    if (!isAuthed && isLoading) {
      try {
        const response = await getCurrentUserThunk()(dispatch);
        setIsAuthed(response.isAuthed);
        setIsLoading(false);
      } catch (error) {
        if (error) alert.error(error);
        setIsAuthed(false);
        setIsLoading(false);
      }
    }
  }, [isAuthed, isLoading]);

  // const hasAccess = () => {
  //   const userInfo = window.localStorage.getItem("userInfo");
  //   console.log(userInfo);
  //   return userInfo && dispatch(checkAndUpdateToken());
  // };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthed ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
