import { useDispatch } from 'react-redux'

import { deleteText } from '../../../actions/textActions'
import { deletePhoto } from '../../../actions/photoActions'
import { deleteVideo } from '../../../actions/videoActions'
import { deleteMaterial } from '../../../actions/materialActions'

export const useDeleteActions = (
  refetch,
  lessonData,
  setLessonData,
  material,
  setMaterial
) => {
  const dispatch = useDispatch()

  const removeTextItem = (id) => {
    dispatch(deleteText(id, refetch))
  }
  const removePhoto = (id) => {
    dispatch(deletePhoto(id, refetch))
  }
  const removeVideo = (id) => {
    dispatch(deleteVideo(id, refetch))
  }
  const removeMaterial = (id) => {
    dispatch(deleteMaterial(id, refetch))
  }
  const removeItem = (id) => {
    const newLessonData = lessonData.filter((item) => item.itemId !== id)
    setLessonData(newLessonData)
  }
  const removeLocalMaterial = (e) => {
    const name = e.currentTarget.getAttribute('name')
    setMaterial(material.filter((item) => item?.mData?.preview !== name))
  }
  return {
    removeTextItem,
    removePhoto,
    removeVideo,
    removeMaterial,
    removeItem,
    removeLocalMaterial
  }
}
