import * as Yup from "yup";
import { contentBuilderValidationSchema } from "common/content-builder";

export const model = {
  avatar: { name: "avatar" },
  title: { name: "title" },
  price: { name: "price" },
  content: { name: "content" },
  isPublished: { name: "isPublished" },
};

export const validationSchema = Yup.object().shape({
  [model.avatar.name]: Yup.mixed().required(),
  [model.title.name]: Yup.string().required(),
  [model.price.name]: Yup.string().required(),
  [model.isPublished.name]: Yup.boolean().required(),
  [model.content.name]: contentBuilderValidationSchema.min(1).required(),
});

export const initialValues = {
  [model.avatar.name]: null,
  [model.title.name]: "",
  [model.price.name]: "",
  [model.content.name]: [],
  [model.isPublished.name]: false,
};
