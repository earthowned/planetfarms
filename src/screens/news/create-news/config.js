import * as Yup from "yup";

import { NewsContentType } from "constants/enums";

export const model = {
  title: { name: "title" },
  category: { name: "category" },
  readTime: { name: "readTime" },
  community: { name: "community" },
  coverImage: { name: "coverImage" },
  newsContent: { name: "newsContent" },
};

const { title, category, readTime, community, newsContent, coverImage } = model;

const isImageFieldType = (type, validation) => {
  if (type === NewsContentType.Image) return validation.required();
  return validation.optional();
};

const isTextFieldType = (type, validation) => {
  if (type === NewsContentType.Text) return validation.required();
  return validation.optional();
};

const dropdownSchema = Yup.object().nullable().shape({
  value: Yup.string(),
  label: Yup.string(),
});

export const validationSchema = Yup.object().shape({
  [title.name]: Yup.string().required(),
  [coverImage.name]: Yup.mixed().optional(),
  [category.name]: dropdownSchema.required(),
  [readTime.name]: dropdownSchema.optional(),
  [community.name]: dropdownSchema.required(),
  [newsContent.name]: Yup.array()
    .of(
      Yup.object().shape({
        type: Yup.string().required(),

        // TextField
        title: Yup.string().optional(),
        text: Yup.string().when("type", (type) =>
          isTextFieldType(type, Yup.string())
        ),

        // ImageField
        imageFile: Yup.mixed().when("type", (type) =>
          isImageFieldType(type, Yup.mixed())
        ),
        imageDescription: Yup.string().optional(),
      })
    )
    .min(1)
    .required(),
});

export const initialValues = {
  [title.name]: "",
  [coverImage.name]: null,
  [category.name]: null,
  [readTime.name]: null,
  [community.name]: null,
  [newsContent.name]: [],
};

export const categoryOptions = [
  { value: "farming", label: "Farming" },
  { value: "people", label: "People" },
  { value: "nature", label: "Nature" },
  { value: "cars", label: "Cars industry" },
  { value: "media", label: "Media news" },
  { value: "fertilizer", label: "Fertilizer" },
];

export const readTimeOptions = [
  { value: "1min", label: "1 min" },
  { value: "5min", label: "5 min" },
  { value: "10min", label: "10 min" },
  { value: "30min", label: "30 min" },
  { value: "moreAnHour", label: "> 1 hour" },
];
