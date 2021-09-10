import { createVideo, updateVideo } from '../../../actions/videoActions'

export const addVideo = function ({ data, richtextId, order, dispatch }) {
  const { videoCover, videoTitle, videoDescription, videoLink, videoResource } = data
  return dispatch(
    createVideo({
      videoCover,
      videoTitle,
      videoDescription,
      videoLink,
      videoResource,
      richtextId,
      order
    }
    )
  )
}

export const editVideo = function ({ data, order, setEditVideoModel, id, dispatch }) {
  const { videoCover, videoTitle, videoDescription, videoLink, videoResource } = data
  return dispatch(
    updateVideo(
      {
        vData: {
          videoCover,
          videoTitle,
          videoDescription,
          videoLink,
          videoResource,
          order
        },
        id,
        setEditVideoModel
      }
    )
  )
}
