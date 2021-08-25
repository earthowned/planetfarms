import { createText } from '../../../actions/textActions'

export const addText = function ({ data, richtextId, dispatch }) {
  const textHeading = data.textHeading
  const textDescription = data.textDescription

  return dispatch(createText(textHeading, textDescription, richtextId))
}
