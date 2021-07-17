import { createText } from '../../../actions/textActions'

export const addText = function ({ lessonData, lessonId, dispatch }) {
  const textHeading = lessonData.textHeading
  const textDescription = lessonData.textDescription

  return dispatch(createText(textHeading, textDescription, lessonId))
}
