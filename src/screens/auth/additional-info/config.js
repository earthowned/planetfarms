import * as Yup from "yup";
import dayjs from "dayjs";

import { dateRegex, phoneRegex } from "utils/regex";

export const AdditionalStep = {
  Info: "Info",
  Avatar: "Avatar",
};

export const Subtitle = {
  [AdditionalStep.Info]:
    "Please fill these fields to communicate with other people easier:",
  [AdditionalStep.Avatar]: "You can upload a photo for your account.",
};

export const model = {
  firstName: {
    name: "firstName",
    type: "text",
    placeholder: "First Name",
  },
  lastName: {
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
  },
  email: {
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  phoneNumber: {
    name: "phoneNumber",
    type: "tel",
    placeholder: "Phone Number",
  },
  birthdate: {
    name: "birthdate",
    type: "date",
    placeholder: "Birthday",
  },
  avatar: {
    name: "avatar",
    placeholder: "Drag & Drop files in this area or Click Here to attach",
  },
};

export const inputs = [
  model.firstName,
  model.lastName,
  model.email,
  model.phoneNumber,
  model.birthdate,
];

const infoValidation = Yup.object().shape({
  [model.firstName.name]: Yup.string().optional(),
  [model.lastName.name]: Yup.string().optional(),
  [model.phoneNumber.name]: Yup.string()
    .optional()
    .matches(phoneRegex, "Invalid Phone Number"),
  [model.email.name]: Yup.string().email().optional(),
  [model.birthdate.name]: Yup.string()
    .optional()
    .matches(dateRegex, "Invalid Date")
    .test("valid-birthdate", "Invalid Birthday", (value) => {
      if (!value) return true;
      const date = dayjs(value, "MM/DD/YYYY");
      return date.isValid() && date.isBefore(dayjs());
    }),
});

const avatarValidation = Yup.object().shape({
  [model.avatar.name]: Yup.string().optional(),
});

const infoInitialValues = {
  [model.firstName.name]: "",
  [model.lastName.name]: "",
  [model.phoneNumber.name]: "",
  [model.email.name]: "",
  [model.birthdate.name]: "",
};

const avatarInitialValues = {
  [model.avatar.name]: null,
};

export const validationSchema = {
  [AdditionalStep.Info]: infoValidation,
  [AdditionalStep.Avatar]: avatarValidation,
};

export const initialValues = {
  [AdditionalStep.Info]: infoInitialValues,
  [AdditionalStep.Avatar]: avatarInitialValues,
};
