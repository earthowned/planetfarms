export const ButtonType = {
  Messages: "Messages",
  Notifications: "Notifications",
  Settings: "Settings",
};

const messageButton = {
  type: ButtonType.Messages,
  title: "Your messages",
  actionButtonTitle: "Show all messages",
};

const notificationButton = {
  type: ButtonType.Notifications,
  title: "Your notifications",
  actionButtonTitle: "Hide notifications",
};

const settingsButton = {
  type: ButtonType.Settings,
  title: "Your settings",
  position: { top: "65px", right: "-12px" },
  width: "400px",
};

export const desktopButtons = [
  // messageButton,
  // notificationButton,
  settingsButton,
];

export const mobileButtons = [settingsButton];
