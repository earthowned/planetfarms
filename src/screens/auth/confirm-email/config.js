import * as yup from "yup";

const model = {
  code: {
    name: "code",
    required: true,
    type: "email-code",
    placeholder: "Code",
  },
};

export const inputs = [model.code];

export const validationSchema = yup.object().shape({
  [model.code.name]: yup
    .string()
    .test({
      name: "email-code",
      message: "Must be 6 digits",
      test: (value) => !value.includes("_"),
    })
    .required("Code is required"),
});

export const initialValues = {
  [model.code.name]: "",
};

export const Variant = {
  Confirm: "Confirm",
  Success: "Success",
};

export const Image = {
  [Variant.Confirm]: "email",
  [Variant.Success]: "congratulations",
};

export const Title = {
  [Variant.Confirm]: "Sign Up",
  [Variant.Success]: "Congratulations!",
};

export const Subtitle = {
  [Variant.Success]: null,
  [Variant.Confirm]:
    "Please check your mail. Enter the code you received in the email.",
};
