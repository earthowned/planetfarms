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

  agrre: {
    name: "agree",
  },
};

export const validationSchema = Yup.object().shape({
  [model.username.name]: Yup.string().required("Username is required field!"),
  [model.password.name]: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required field!"),
  [model.agrre.name]: Yup.bool().isTrue().required(),
});

export const initialValues = {
  [model.username.name]: "",
  [model.password.name]: "",
  [model.agrre.name]: false,
};
