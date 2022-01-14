import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userAction";

function LogoutUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>Logging Out...</p>
    </div>
  );
}

export default LogoutUser;
