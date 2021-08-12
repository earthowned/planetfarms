import { useState, useEffect } from 'react'

export const useFetchLessonData = (data, lessonData) => {
  const [lessonEditData, setLessonEditData] = useState([])
  const [material, setMaterial] = useState([])

  const textData = data?.data?.texts.map((text) => {
    return text
  })
  const videoData = data?.data?.videos.map((video) => {
    return video
  })
  const photoData = data?.data?.photos.map((photo) => {
    return photo
  })

  useEffect(() => {
    setLessonEditData([textData, videoData, photoData, lessonData].flat())
    setMaterial(data?.data?.materials)
  }, [data, lessonData])

  return { lessonEditData, material, setMaterial }
}
