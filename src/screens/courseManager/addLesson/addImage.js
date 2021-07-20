import { createLessonImg } from '../../../actions/photoActions'

export const addImage = function ({ lessonData, lessonId, dispatch }) {
  const lessonImg = lessonData.lessonImg
  const photoDescription = lessonData.photoDescription
  const isImgDesc = lessonData.isImgDesc
  return dispatch(
    createLessonImg(lessonImg, photoDescription, isImgDesc, lessonId)
  )
}
