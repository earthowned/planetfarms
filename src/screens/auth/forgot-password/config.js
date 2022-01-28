import * as Yup from "yup";

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
    icon: "lock",
    placeholder: "New Password",
  },

  confirmPassword: {
    name: "confirmPassword",
    icon: "lock",
    placeholder: "Confirm Password",
  },
};

const { username, codeRequested, code, password, confirmPassword } = model;

const isRequiredField = (value, schema, message) =>
  value ? schema.required(message) : schema.optional();

export const validationSchema = Yup.object().shape({
  [username.name]: Yup.string().required("Username is required field!"),

  [codeRequested.name]: Yup.bool().optional(),

  [code.name]: Yup.string().when([codeRequested.name], (value, schema) =>
    isRequiredField(value, schema, "Code is required field!")
  ),

  [password.name]: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .when([codeRequested.name], (value, schema) =>
      isRequiredField(value, schema, "Password is required field!")
    ),

  [confirmPassword.name]: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .test(
      "passwords-match",
      "Passwords must match",
      (value, context) => context.parent.password === value
    )
    .when([codeRequested.name], (value, schema) =>
      isRequiredField(value, schema, "Confirm Password is required field!")
    ),
});

export const initialValues = {
  [username.name]: "",
  [codeRequested.name]: false,
  [code.name]: "",
  [password.name]: "",
  [confirmPassword.name]: "",
};
