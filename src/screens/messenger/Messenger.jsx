import React from "react";
import "./Messenger.scss";
import MessengerMain from "../../components/messengerMain/MessengerMain";
import DashboardLayout from "../../layout/dashboardLayout/DashboardLayout";

const Messenger = () => {
  return (
    <DashboardLayout title="Messenger">
      <MessengerMain />
    </DashboardLayout>
  );
};

export default Messenger;
