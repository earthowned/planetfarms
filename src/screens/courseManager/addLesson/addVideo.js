import { createVideo } from '../../../actions/videoActions'

export const addVideo = function (lessonData, lessonId, dispatch) {
  let i = 0
  const lessonDataLen = lessonData.length
  for (i; i < lessonDataLen; i++) {
    const videoCover = lessonData[i].videoCover
    const videoTitle = lessonData[i].videoTitle
    const videoDescription = lessonData[i].videoDescription
    const videoLink = lessonData[i].videoLink
    const videoResource = lessonData[i].videoResource
    if (
      videoCover ||
      videoTitle ||
      videoDescription ||
      videoLink ||
      videoResource
    ) {
      dispatch(
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
  }
}
