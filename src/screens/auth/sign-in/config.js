import * as Yup from "yup";

export const model = {
  username: {
    name: "username",
  },

  password: {
    name: "password",
  },
};

export const validationSchema = Yup.object().shape({
  [model.username.name]: Yup.string().required("Username is required field!"),
  [model.password.name]: Yup.string().required("Username is required field!"),
});

export const initialValues = {
  [model.username.name]: "",
  [model.password.name]: "",
};
