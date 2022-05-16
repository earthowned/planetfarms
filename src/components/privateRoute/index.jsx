import { useEffect } from "react";
import { useAlert } from "react-alert";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Routes } from "constants/routes";
import { useStateIfMounted } from "hooks";
import { getErrorMessage } from "utils/error";
import { selectIsAuthed } from "store/user/selectors";
import { getCurrentUserThunk } from "store/user/thunks";

const CheckAuthRoute = ({ isAuthed }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const [isRequesting, setIsRequesting] = useStateIfMounted(true);

  useEffect(async () => {
    try {
      await dispatch(getCurrentUserThunk());
    } catch (error) {
      alert.error(getErrorMessage(error));
    } finally {
      setIsRequesting(false);
    }
  }, []);

  if (!isAuthed && isRequesting) return <></>;

  if (!isAuthed && !isRequesting) return <Redirect to={Routes.Auth.Login} />;

  return null;
};

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthed = useSelector(selectIsAuthed);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthed ? (
          <Component {...props} />
        ) : (
          <CheckAuthRoute isAuthed={isAuthed} />
        )
      }
    />
  );
};
