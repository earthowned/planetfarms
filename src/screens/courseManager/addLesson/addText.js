import { createLessonText } from '../../../actions/lessonTextActions'

export const addText = function (lessonData, lessonId, dispatch) {
  let i = 0
  const lessonDataLen = lessonData.length

  for (i; i < lessonDataLen; i++) {
    const textHeading = lessonData[i].textHeading
    const textDescription = lessonData[i].textDescription
    if (lessonData.textHeading || lessonData[i].textDescription) {
      dispatch(createLessonText(textHeading, textDescription, lessonId))
    }
  }
}
