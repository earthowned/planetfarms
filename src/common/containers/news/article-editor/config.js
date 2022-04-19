import * as Yup from "yup";

import { ArticleEditorType } from "constants/enums";
import { contentBuilderValidationSchema } from "common/content-builder";

export const model = {
  title: { name: "title" },
  category: { name: "category" },
  readTime: { name: "readTime" },
  community: { name: "community" },
  coverImage: { name: "coverImage" },
  newsContent: { name: "newsContent" },
};

const { title, category, readTime, community, newsContent, coverImage } = model;

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
  [newsContent.name]: contentBuilderValidationSchema.min(1).required(),
});

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

export const ActionButtonTitle = {
  [ArticleEditorType.Create]: "Add News",
  [ArticleEditorType.Edit]: "Edit News",
};
