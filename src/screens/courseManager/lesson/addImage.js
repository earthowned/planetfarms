/* eslint-disable func-names */
import { createLessonImg, updatePhoto } from "../../../actions/photoActions";

export const addImage = function ({ data, richtextId, order, dispatch }) {
  const { lessonImg, photoDescription, isImgDesc } = data;
  return dispatch(
    createLessonImg({
      img: lessonImg,
      photoDescription,
      isImgDesc,
      order,
      richtextId,
    })
  );
};

export const editImage = function ({
  id,
  data,
  order,
  setEditPhotoModel,
  dispatch,
}) {
  const { lessonImg, photoDescription, isImgDesc } = data;
  return dispatch(
    updatePhoto({
      iData: { img: lessonImg, photoDescription, isImgDesc, order },
      id,
      setEditPhotoModel,
    })
  );
};
