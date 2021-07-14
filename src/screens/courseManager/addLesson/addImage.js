import { createLessonImg } from '../../../actions/photoActions'

export const addImage = function (lessonData, lessonId, dispatch) {
  let i = 0
  const lessonDataLen = lessonData.length

  for (i; i < lessonDataLen; i++) {
    const lessonImg = lessonData[i].lessonImg
    const photoDescription = lessonData[i].photoDescription
    const isImgDesc = lessonData[i].isImgDesc
    if (lessonImg || photoDescription || isImgDesc) {
      dispatch(
        createLessonImg(lessonImg, photoDescription, isImgDesc, lessonId)
      )
    }
  }
}
