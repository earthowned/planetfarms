import * as Yup from "yup";

export const model = {
  username: {
    name: "username",
  },

  password: {
    name: "password",
  },

  agrre: {
    name: "agree",
  },
};

export const validationSchema = Yup.object().shape({
  [model.username.name]: Yup.string().required("Username is required field!"),
  [model.password.name]: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required field!"),
  [model.agrre.name]: Yup.bool().isTrue().required(),
});

export const initialValues = {
  [model.username.name]: "",
  [model.password.name]: "",
  [model.agrre.name]: false,
};
