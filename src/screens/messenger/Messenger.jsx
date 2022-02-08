import React from "react";

import { DashboardLayout } from "layout/dashboard";

import MessengerMain from "../../components/messengerMain/MessengerMain";

import "./Messenger.scss";

const Messenger = () => {
  return (
    <DashboardLayout title="Messenger">
      <MessengerMain />
    </DashboardLayout>
  );
};

export default Messenger;
