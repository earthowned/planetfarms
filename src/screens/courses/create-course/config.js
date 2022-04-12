import * as Yup from "yup";

export const model = {
  avatar: {
    name: "avatar",
  },

  title: {
    name: "title",
  },

  price: {
    name: "price",
  },
};

export const validationSchema = Yup.object().shape({
  [model.avatar.name]: Yup.mixed().required(),
  [model.title.name]: Yup.string().required(),
  [model.price.name]: Yup.string().required(),
});

export const initialValues = {
  [model.avatar.name]: null,
  [model.title.name]: "",
  [model.price.name]: "",
};
