import * as Yup from "yup";
import { contentBuilderValidationSchema } from "common/content-builder";

export const model = {
  thumbnail: { name: "thumbnail" },
  title: { name: "title" },
  price: { name: "price" },
  description: { name: "description" },
  isPublished: { name: "isPublished" },
};

export const validationSchema = Yup.object().shape({
  [model.thumbnail.name]: Yup.mixed().required(),
  [model.title.name]: Yup.string().required(),
  [model.price.name]: Yup.string().required(),
  [model.isPublished.name]: Yup.boolean().required(),
  [model.description.name]: contentBuilderValidationSchema.min(1).required(),
});
