import * as Yup from "yup";

export const model = {
  old: {
    name: "oldPassword",
    placeholder: "Old password",
    icon: "lock",
    type: "password",
  },
  new: {
    name: "newPassword",
    placeholder: "New password",
    icon: "lock",
    type: "password",
  },
  confirm: {
    name: "confirmPassword",
    placeholder: "Confirm password",
    icon: "lock",
    type: "password",
  },
};

export const validationSchema = Yup.object().shape({
  [model.old.name]: Yup.string().required("Required field"),
  [model.new.name]: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .test(
      "passwords-not-match",
      "New password must be not the same as old",
      (value, context) => context.parent.oldPassword !== value
    )
    .required("Required field"),
  [model.confirm.name]: Yup.string()
    .test(
      "passwords-match",
      "New and confirm passwords must match",
      (value, context) => context.parent.newPassword === value
    )
    .required("Required field"),
});

export const initialValues = {
  [model.old.name]: "",
  [model.new.name]: "",
  [model.confirm.name]: "",
};
