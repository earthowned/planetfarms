import * as Yup from "yup";

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
    type: "text",
    placeholder: "Phone Number",
  },
  birthday: {
    name: "birthday",
    type: "text",
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
  [model.firstName.name]: Yup.string().optional(),
  [model.lastName.name]: Yup.string().optional(),
  [model.email.name]: Yup.string().email().optional(),
  [model.birthday.name]: Yup.string().optional(),
});

export const intitalValues = {
  [model.firstName.name]: "",
  [model.lastName.name]: "",
  [model.email.name]: "",
  [model.birthday.name]: "",
};
