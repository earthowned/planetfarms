import { useMemo } from "react";

import { useDeviceType } from "hooks";
import { DeviceType } from "constants/enums";
import { PageHeader } from "common/page-header";

import "./styles.scss";

export const DashboardLayout = ({
  title,
  children,
  withBackButton = false,
}) => {
  const { device } = useDeviceType();

  const showPageTitle = useMemo(() => {
    if (!title) return false;
    return (
      device === DeviceType.Mobile ||
      device === DeviceType.Tablet ||
      withBackButton
    );
  }, [title, withBackButton, device]);

  return (
    <div className="dashboard-container">
      <PageHeader title={title} withBackButton={withBackButton} />
      <div className="dashboard-page-container">
        {showPageTitle && (
          <div className="page-title-header">
            <h2>{title}</h2>
          </div>
        )}
        <div className="dashboard-page">{children}</div>
      </div>
    </div>
  );
};
