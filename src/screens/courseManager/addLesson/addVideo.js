import { createVideo, updateVideo } from '../../../actions/videoActions'

export const addVideo = function ({ data, richtextId, order, dispatch }) {
  const videoCover = data.videoCover
  const videoTitle = data.videoTitle
  const videoDescription = data.videoDescription
  const videoLink = data.videoLink
  const videoResource = data.videoResource
  return dispatch(
    createVideo(
      videoCover,
      videoTitle,
      videoDescription,
      videoLink,
      videoResource,
      richtextId,
      order
    )
  )
}

export const editVideo = function ({ data, order, setEditVideoModel, id, dispatch }) {
  const videoCover = data.videoCover
  const videoTitle = data.videoTitle
  const videoDescription = data.videoDescription
  const videoLink = data.videoLink
  const videoResource = data.videoResource
  return dispatch(
    updateVideo(
      id,
      videoCover,
      videoTitle,
      videoDescription,
      videoLink,
      videoResource,
      setEditVideoModel,
      order
    )
  )
}
