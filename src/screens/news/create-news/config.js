import * as Yup from "yup";

export const model = {
  title: { name: "title" },
  category: { name: "category" },
  readTime: { name: "readTime" },
  community: { name: "community" },
  newsContent: { name: "newsContent" },
};

const { title, category, readTime, community, newsContent } = model;

const isImageFieldType = (type, validation) => {
  if (type === "Picture") return validation.required();
  return validation.optional();
};

const isTextFieldType = (type, validation) => {
  if (type === "TextField") return validation.required();
  return validation.optional();
};

const isVideoFieldType = (type, validation) => {
  if (type === "Video") return validation.required();
  return validation.optional();
};

export const validationSchema = Yup.object().shape({
  [title.name]: Yup.string().required(),
  [category.name]: Yup.string(),
  [readTime.name]: Yup.string(),
  [community.name]: Yup.string(),
  [newsContent.name]: Yup.array().of(
    Yup.object().shape({
      type: Yup.string().required(),
      title: Yup.string().optional(),
      text: Yup.string().when("type", (type) =>
        isTextFieldType(type, Yup.string())
      ),
      imageFile: Yup.mixed().when("type", (type) =>
        isImageFieldType(type, Yup.mixed())
      ),
      imageDescription: Yup.string().optional(),
    })
  ),
});

export const initialValues = {
  [title.name]: "",
  [category.name]: "",
  [readTime.name]: "",
  [community.name]: "",
  [newsContent.name]: [],
};
