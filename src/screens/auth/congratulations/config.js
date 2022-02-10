import * as Yup from "yup";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { dateRegex, phoneRegex } from "utils/regex";

dayjs.extend(customParseFormat);

export const model = {
  avatar: {
    name: "avatar",
    placeholder: "Drag & Drop files in this area or Click Here to attach",
  },
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
  birthday: {
    name: "birthday",
    type: "date",
    placeholder: "Birthday",
  },
};

export const inputs = [
  model.firstName,
  model.lastName,
  model.email,
  model.phoneNumber,
  model.birthday,
];

export const validationSchema = Yup.object().shape({
  [model.avatar.name]: Yup.object().optional(),
  [model.firstName.name]: Yup.string().optional(),
  [model.lastName.name]: Yup.string().optional(),
  [model.phoneNumber.name]: Yup.string()
    .optional()
    .matches(phoneRegex, "Invalid Phone Number"),
  [model.email.name]: Yup.string().email().optional(),
  [model.birthday.name]: Yup.string()
    .optional()
    .matches(dateRegex, "Invalid Date")
    .test("valid-birthdate", "Invalid Birthday", (value) => {
      const date = dayjs(value, "DD/MM/YYYY");
      return date.isValid() && date.isBefore(dayjs());
    }),
});

export const intitalValues = {
  [model.avatar.name]: {},
  [model.firstName.name]: "",
  [model.lastName.name]: "",
  [model.phoneNumber.name]: "",
  [model.email.name]: "",
  [model.birthday.name]: "",
};
