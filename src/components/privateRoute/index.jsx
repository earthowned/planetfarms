import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkAndUpdateToken } from "../../actions/userAction";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();

  // TODO: Refactor;
  // TODO: Don't need to make request on every route change;
  const hasAccess = () => {
    const userInfo = window.localStorage.getItem("userInfo");
    return userInfo && dispatch(checkAndUpdateToken());
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        hasAccess() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
