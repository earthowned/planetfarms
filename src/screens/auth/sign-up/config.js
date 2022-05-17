import * as Yup from "yup";

import { password } from "utils/validators";

export const model = {
  email: {
    name: "email",
    icon: "person",
    required: true,
    placeholder: "Email",
  },

  password: {
    name: "password",
    type: "password",
    icon: "lock",
    required: true,
    placeholder: "Password",
  },

  agrre: {
    name: "agree",
  },
};

export const inputs = [model.email, model.password];

export const validationSchema = Yup.object().shape({
  [model.email.name]: Yup.string()
    .email("Email is not valid")
    .required("Username is required field!"),
  [model.password.name]: password(8).required("Password is required field!"),
  [model.agrre.name]: Yup.bool().isTrue().required(),
});

export const initialValues = {
  [model.email.name]: "",
  [model.password.name]: "",
  [model.agrre.name]: false,
};
