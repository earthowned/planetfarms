import React, { useLayoutEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getApi } from "./apiFunc";

const { useDispatch } = require("react-redux");

// this is higer order component
// wrap this to the component to check the role of user
// pass in the protected api route to check permission (see: Category.jsx)

const CheckPermit = (OriginalComponent, url) => {
  const NewComponent = () => {
    const [data, setData] = useState("");

    const dispatch = useDispatch();

    const fetchData = async () => {
      const { data: response } = await getApi(dispatch, url);
      setData(response);
    };

    useLayoutEffect(() => {
      fetchData();
    }, []);

    if (data?.error) return <Redirect to="/dashboard" />;
    return data?.results && <OriginalComponent />;
  };

  return NewComponent;
};

export default CheckPermit;
