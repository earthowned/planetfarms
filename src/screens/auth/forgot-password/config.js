import * as Yup from "yup";

import { password, repeatPassword } from "utils/validators";

export const model = {
  username: {
    name: "username",
    icon: "person",
    placeholder: "Username",
  },

  codeRequested: {
    name: "codeRequested",
  },

  code: {
    name: "code",
    icon: "lock",
    placeholder: "Code",
  },

  password: {
    name: "password",
    type: "password",
    icon: "lock",
    placeholder: "New Password",
  },

  confirmPassword: {
    name: "confirmPassword",
    type: "password",
    icon: "lock",
    placeholder: "Confirm Password",
  },
};

const isRequiredField = (value, schema, message) =>
  value ? schema.required(message) : schema.optional();

export const validationSchema = Yup.object().shape({
  [model.username.name]: Yup.string().required("Username is required field!"),

  [model.codeRequested.name]: Yup.bool().optional(),

  [model.code.name]: Yup.string().when(
    [model.codeRequested.name],
    (value, schema) => isRequiredField(value, schema, "Code is required field!")
  ),

  [model.password.name]: password(8).when(
    [model.codeRequested.name],
    (value, schema) =>
      isRequiredField(value, schema, "Password is required field!")
  ),

  [model.confirmPassword.name]: repeatPassword(8).when(
    [model.codeRequested.name],
    (value, schema) =>
      isRequiredField(value, schema, "Confirm Password is required field!")
  ),
});

export const initialValues = {
  [model.code.name]: "",
  [model.username.name]: "",
  [model.password.name]: "",
  [model.confirmPassword.name]: "",
  [model.codeRequested.name]: false,
};
