import React from "react";

import { PageHeader } from "common/page-header";

import "./Dashboard.css";

const DashboardLayout = ({ title, children }) => {
  return (
    <div className="dashboard-container">
      <PageHeader title={title} />
      <div className="dashboard-page-container">
        <div className="dashboard-page">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
