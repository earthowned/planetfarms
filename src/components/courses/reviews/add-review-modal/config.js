import * as yup from "yup";

export const model = {
  review: {
    name: "review",
  },

  rate: {
    name: "rate",
  },
};

export const validationSchema = yup.object().shape({
  [model.review.name]: yup.string().required("Please leave a review"),
  [model.rate.name]: yup.number().min(1).required(),
});

export const initialValues = {
  [model.review.name]: "",
  [model.rate.name]: 4,
};
