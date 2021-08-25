import { useQuery } from 'react-query'
import { LESSONS, Axios, GET_COURSE, GET_LESSONS } from './urlConstants'
import { configFunc } from './apiFunc'

const useGetLessonData = (id, setMaterialData, userId, setPath) => {
  const { isLoading, data, refetch } = useQuery(
    'lessonData',
    async () => {
    //   const { data } = await Axios.get(LESSONS + `/${id}`, configFunc())
    //   setMaterialData(data?.data?.materials)
    //   return data
    // },
    // {
    //   onSuccess: (data) => {
    //     const id = data?.data?.courseId
    //     Axios.get(GET_COURSE + `/${id}`, configFunc()).then((res) => {
      const { data } = await Axios.get(GET_LESSONS + `/${id}`)
      setMaterialData(data?.lesson?.materials)
      return data.lesson
    },
    {
      onSuccess: (data) => {
        const id = data?.courseId
        Axios.get(GET_COURSE + `/${id}`).then((res) => {
          const dat = res?.data?.data.creator
          setPath(dat === userId ? `/admin/course/${id}` : `/course/${id}`)
        })
      }
    }
  )
  return { isLoading, data, refetch }
}

export default useGetLessonData
