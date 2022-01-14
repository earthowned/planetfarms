import React from "react";

import MessengerMain from "../../components/messengerMain/MessengerMain";
import DashboardLayout from "../../layout/dashboardLayout/DashboardLayout";

import "./Messenger.scss";

const Messenger = () => {
  return (
    <>
      <DashboardLayout title="Messenger">
        <MessengerMain />
      </DashboardLayout>
    </>
  );
};

export default Messenger;
