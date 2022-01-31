export const getPageTitle = (path) => {
  switch (true) {
    case path === "/news":
      return "News";

    case path === "/news/add":
      return "Add News";

    case path === "/groups":
      return "Community Group";

    default:
      return "PlanetFarm";
  }
};
