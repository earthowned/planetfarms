const news = "/news";
const courses = "/courses";

const Auth = {
  Login: "/login",
  Register: "/register",
  ConfirmEmail: "/confirm-email",
  ForgotPassword: "/forgot-password",
  AdditionalInfo: "/additional-info",
};

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

export const Routes = { Auth, News, Courses };
