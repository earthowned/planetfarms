import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setIsLoading } from "store/loader/slices";
import { getCurrentUserThunk } from "store/user/thunks";
import { selectCurrentUser } from "store/user/selectors";
import { selectIsLoading } from "store/loader/selectors";

// import { checkAndUpdateToken } from "../../actions/userAction";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const [isAuthed, setIsAuthed] = useState(false);

  const isLoading = useSelector(selectIsLoading);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (!currentUser) {
      setIsAuthed(false);
      dispatch(setIsLoading(true));
    }
    if (currentUser) {
      setIsAuthed(true);
      dispatch(setIsLoading(false));
    }
  }, [currentUser]);

  useEffect(async () => {
    if (!isAuthed && isLoading) {
      try {
        const response = await dispatch(getCurrentUserThunk());
        setIsAuthed(response.isAuthed);
      } catch (error) {
        if (error) alert.error(error);
        setIsAuthed(false);
      } finally {
        dispatch(setIsLoading(false));
      }
    }
  }, [isAuthed, isLoading]);

  // const hasAccess = () => {
  //   const userInfo = window.localStorage.getItem("userInfo");
  //   console.log(userInfo);
  //   return userInfo && dispatch(checkAndUpdateToken());
  // };

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthed ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
