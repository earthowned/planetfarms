import { createLessonImg } from '../../../actions/photoActions'

export const addImage = function ({ data, richtextId, order, dispatch }) {
  const lessonImg = data.lessonImg
  const photoDescription = data.photoDescription
  const isImgDesc = data.isImgDesc
  return dispatch(
    createLessonImg(lessonImg, photoDescription, isImgDesc, richtextId, order)
  )
}
