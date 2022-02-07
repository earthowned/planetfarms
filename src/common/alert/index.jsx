import React from "react";
import cx from "classnames";

// import { IconButton } from "common/buttons/icon-button";

import "./styles.scss";

// TODO: Uncomment IconButton when will define what css rule breaks layout
// and move alert to bottom of the DOM three;

export const Alert = ({ message, options }) => (
  <div className={cx("pf-alert", { [`pf-alert-${options.type}`]: true })}>
    <h5>{message}</h5>
    {/* <IconButton variant="white" icon="cross" onClick={close} /> */}
  </div>
);

export const alertOptions = {
  timeout: 3000,
  position: "top right",
};
