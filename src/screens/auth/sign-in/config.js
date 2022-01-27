import * as Yup from "yup";

export const model = {
  username: {
    name: "username",
    icon: "person",
    required: true,
    placeholder: "Username",
  },

  password: {
    name: "password",
    icon: "lock",
    required: true,
    placeholder: "Password",
  },
};

export const validationSchema = Yup.object().shape({
  [model.username.name]: Yup.string().required("Username is required field!"),
  [model.password.name]: Yup.string().required("Password is required field!"),
});

export const initialValues = {
  [model.username.name]: "",
  [model.password.name]: "",
};
