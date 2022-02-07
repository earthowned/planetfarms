import React from "react";

import { PageHeader } from "common/page-header";

import "./styles.scss";

export const DashboardLayout = ({ title, children }) => {
  return (
    <div className="dashboard-container">
      <PageHeader title={title} />
      <div className="dashboard-page-container">
        <div className="dashboard-page">{children}</div>
      </div>
    </div>
  );
};
