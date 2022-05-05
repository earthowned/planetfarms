import * as Yup from "yup";

export const model = {
  email: {
    name: "email",
    icon: "person",
    required: true,
    placeholder: "Email",
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
  [model.email.name]: Yup.string()
    .email("Email is not valid")
    .required("Username is required field!"),
  [model.password.name]: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required field!"),
  [model.agrre.name]: Yup.bool().isTrue().required(),
});

export const initialValues = {
  [model.email.name]: "",
  [model.password.name]: "",
  [model.agrre.name]: false,
};
