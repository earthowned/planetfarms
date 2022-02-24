export const ButtonType = {
  Profile: "Profile",
  Messages: "Messages",
  Notifications: "Notifications",
  Menu: "Menu",
};

export const modalButtons = [
  { type: ButtonType.Messages },
  { type: ButtonType.Notifications },
  { type: ButtonType.Menu },
];

export const links = [
  {
    title: "My Dashboard",
    icon: "grid",
    to: "/dashboard",
  },
  {
    title: "Communities",
    icon: "users",
    to: "/communities",
  },
  {
    title: "News",
    icon: "globe",
    to: "/news",
  },
  {
    title: "Library",
    icon: "book",
    to: "/library",
  },
  {
    title: "Courses",
    icon: "graduation-cap",
    to: "/courses",
  },
  {
    title: "Calendar",
    icon: "calendar",
    to: "/calendar/my-events",
  },
  {
    title: "Messanger",
    icon: "email",
    to: "/messenger",
  },
];
