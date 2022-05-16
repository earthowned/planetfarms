import * as yup from "yup";
import { contentBuilderValidationSchema } from "common/content-builder";

export const model = {
  thumbnail: {
    name: "thumbnail",
  },

  title: {
    name: "title",
  },

  description: {
    name: "description",
  },
};

export const validationSchema = yup.object().shape({
  [model.title.name]: yup.string().required(),
  [model.thumbnail.name]: yup.mixed().required(),
  [model.description.name]: contentBuilderValidationSchema.min(1).required(),
});

export const initialValues = {
  [model.title.name]: "",
  [model.thumbnail.name]: null,
  [model.description.name]: [],
};
