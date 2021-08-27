import { createText, updateText } from '../../../actions/textActions'

export const addText = function ({ data, richtextId, order, dispatch }) {
  const textHeading = data.textHeading
  const textDescription = data.textDescription

  return dispatch(createText(textHeading, textDescription, richtextId, order))
}

export const editText = function ({ textId, data, order, setEditTextModel, dispatch }) {
  const textHeading = data.textHeading
  const textDescription = data.textDescription

  return dispatch(updateText(textId, textHeading, textDescription, order, setEditTextModel))
}
