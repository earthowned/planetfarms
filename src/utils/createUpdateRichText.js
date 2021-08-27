import { addImage, editImage } from '../screens/courseManager/addLesson/addImage'
import { addText, editText } from '../screens/courseManager/addLesson/addText'
import { addVideo, editVideo } from '../screens/courseManager/addLesson/addVideo'

export const updateRichText = async (data, richtextId, dispatch) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i]?.videoLink || data[i]?.videoResource) {
      if (data[i].id) {
        await editVideo({ id: data[i].id, data: data[i], order: i + 1, dispatch })
      } else {
        await addVideo({ data: data[i], richtextId, order: i + 1, dispatch })
      }
    }
    if (data[i]?.lessonImg) {
      if (data[i].id) {
        await editImage({ id: data[i].id, data: data[i], order: i + 1, dispatch })
      } else {
        await addImage({ data: data[i], richtextId, order: i + 1, dispatch })
      }
    }
    if (data[i]?.textHeading || data[i]?.textDescription) {
      if (data[i].id) {
        await editText({ textId: data[i].id, data, order: i + 1, dispatch })
      } else {
        await addText({ data: data[i], richtextId, order: i + 1, dispatch })
      }
    }
  }
}

export const createRichText = async (data, richtextId, dispatch) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i]?.videoLink || data[i]?.videoResource) {
      await addVideo({ data: data[i], order: i + 1, richtextId, dispatch })
    }
    if (data[i]?.lessonImg) {
      await addImage({ data: data[i], order: i + 1, richtextId, dispatch })
    }
    if (data[i]?.textHeading || data[i]?.textDescription) {
      await addText({ data: data[i], order: i + 1, richtextId, dispatch })
    }
  }
}
