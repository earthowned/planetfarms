import * as Yup from "yup";

import { ContentBuilderAction } from "constants/enums";

const model = {
  type: { name: "type" },

  text: {
    heading: { name: "textHeading" },
    description: { name: "textDescription" },
  },

  image: {
    file: { name: "lessonImg" },
    description: { name: "photoDescription" },
  },

  video: {
    title: { name: "videoTitle" },
    description: { name: "videoDescription" },
    file: { name: "videoResource" },
    link: { name: "videoLink" },
  },
};

const textBlockSchema = Yup.object().shape({
  [model.text.heading.name]: Yup.string().optional(),
  [model.text.description.name]: Yup.string().required(),
});

const imageBlockSchema = Yup.object().shape({
  [model.image.file.name]: Yup.mixed().required(),
  [model.image.description.name]: Yup.string().optional(),
});

const videoResourceSchema = Yup.mixed().when(model.video.link.name, (link) => {
  return link ? Yup.mixed().optional() : Yup.mixed().required();
});

const videoLinkSchema = Yup.string().when(model.video.file.name, (file) => {
  return file
    ? Yup.string().optional()
    : Yup.string()
        .url("URL is not valid")
        .required("Provide Link or choose file from device");
});

const videoBlockSchema = Yup.object().shape(
  {
    [model.video.title.name]: Yup.string().optional(),
    [model.video.description.name]: Yup.string().optional(),
    [model.video.file.name]: videoResourceSchema,
    [model.video.link.name]: videoLinkSchema,
  },
  [model.video.link.name, model.video.file.name]
);

export const contentBuilderValidationSchema = Yup.array().of(
  Yup.object().shape({
    [model.type.name]: Yup.string().required(),
    data: Yup.object()
      .when(model.type.name, {
        is: ContentBuilderAction.Text,
        then: textBlockSchema,
      })
      .when(model.type.name, {
        is: ContentBuilderAction.Image,
        then: imageBlockSchema,
      })
      .when(model.type.name, {
        is: ContentBuilderAction.Video,
        then: videoBlockSchema,
      }),
  })
);
