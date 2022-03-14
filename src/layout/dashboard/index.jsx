import React from "react";

import { PageHeader } from "common/page-header";

import "./styles.scss";

export const DashboardLayout = ({
  title,
  children,
  withBackButton = false,
}) => {
  return (
    <div className="dashboard-container">
      <PageHeader title={title} withBackButton={withBackButton} />
      <div className="dashboard-page-container">
        <div className="dashboard-page">{children}</div>
      </div>
    </div>
  );
};
