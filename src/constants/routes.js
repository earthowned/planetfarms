const news = "/news";
const courses = "/courses";

const News = {
  Home: news,
  Article: `${news}/:id`,
  Create: `${news}/create`,
  Edit: `${news}/edit/:id`,
  Preview: `${news}/preview`,
};

const Courses = {
  Home: courses,
  Course: `${courses}/:id`,
  Create: `${courses}/create`,
  Members: `${courses}/:id/members`,
};

export const Routes = { News, Courses };
