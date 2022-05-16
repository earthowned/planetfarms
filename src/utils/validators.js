import * as yup from "yup";

export const emailCode = yup.string().test({
  name: "email-code",
  message: "Must be 6 digits",
  test: (value) => !value.includes("_"),
});

export const password = (characters) => {
  const message = `Password must be at least ${characters} characters`;
  return yup.string().min(characters, message);
};

export const repeatPassword = (characters) => {
  const message = `Password must be at least ${characters} characters`;
  return yup
    .string()
    .min(characters, message)
    .test(
      "passwords-match",
      "Passwords must match",
      (value, context) => context.parent.password === value
    );
};
