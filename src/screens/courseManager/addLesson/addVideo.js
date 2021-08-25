import { createVideo } from '../../../actions/videoActions'

export const addVideo = function ({ data, richtextId, dispatch }) {
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
      richtextId
    )
  )
}
