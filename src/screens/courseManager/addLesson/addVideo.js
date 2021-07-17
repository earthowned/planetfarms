import { createVideo } from '../../../actions/videoActions'

export const addVideo = function ({ lessonData, lessonId, dispatch }) {
  const videoCover = lessonData.videoCover
  const videoTitle = lessonData.videoTitle
  const videoDescription = lessonData.videoDescription
  const videoLink = lessonData.videoLink
  const videoResource = lessonData.videoResource

  return dispatch(
    createVideo(
      videoCover,
      videoTitle,
      videoDescription,
      videoLink,
      videoResource,
      lessonId
    )
  )
}
