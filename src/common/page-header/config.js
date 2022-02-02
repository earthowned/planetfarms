export const ButtonType = {
  Messages: "Messages",
  Notifications: "Notifications",
  Settings: "Settings",
};

export const buttons = [
  {
    type: ButtonType.Messages,
    title: "Your messages",
    actionButtonTitle: "Show all messages",
  },
  {
    type: ButtonType.Notifications,
    title: "Your notifications",
    actionButtonTitle: "Hide notifications",
  },
  {
    type: ButtonType.Settings,
    title: "Your settings",
    position: { top: "65px", right: "-12px" },
    width: "350px",
  },
];

export const actionButtons = [
  {
    icon: "grid",
    title: "Switch Community",
    path: "/community-switching",
  },
  {
    icon: "person",
    title: "My dashboard",
    path: "/dashboard",
  },
];
