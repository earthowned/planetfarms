import * as Yup from "yup";

import { ArticleEditorType, NewsContentType } from "constants/enums";

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

  [newsContent.name]: Yup.array()
    .of(
      Yup.object().shape({
        type: Yup.string().required(),
        data: Yup.object()
          .when("type", {
            is: NewsContentType.Text,
            then: Yup.object().shape({
              textHeading: Yup.string().optional(),
              textDescription: Yup.string().required(),
            }),
          })
          .when("type", {
            is: NewsContentType.Image,
            then: Yup.object().shape({
              lessonImg: Yup.mixed().required(),
              photoDescription: Yup.string().optional(),
            }),
          })
          .when("type", {
            is: NewsContentType.Video,
            then: Yup.object().shape(
              {
                videoTitle: Yup.string().optional(),
                videoDescription: Yup.string().optional(),
                videoResource: Yup.mixed().when("videoLink", (videoLink) => {
                  return videoLink
                    ? Yup.mixed().optional()
                    : Yup.mixed().required();
                }),
                videoLink: Yup.string().when("videoResource", (videoFile) => {
                  return videoFile
                    ? Yup.string().optional()
                    : Yup.string()
                        .url("URL is not valid")
                        .required("Provide Link or choose file from device");
                }),
              },
              ["videoResource", "videoLink"]
            ),
          }),
      })
    )
    .min(1)
    .required(),
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
