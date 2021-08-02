import { useQuery } from 'react-query'
import { LESSONS, Axios, GET_COURSE } from './urlConstants'

const useGetLessonData = (id, setMaterialData, userId, setPath) => {
  const { isLoading, data } = useQuery(
    'lessonData',
    async () => {
      const { data } = await Axios.get(LESSONS + `/${id}`)
      setMaterialData(data?.data?.materials)
      return data
    },
    {
      onSuccess: (data) => {
        const id = data?.data?.courseId
        Axios.get(GET_COURSE + `/${id}`).then((res) => {
          const dat = res?.data?.data.creator
          setPath(dat === userId ? `/admin/course/${id}` : `/course/${id}`)
        })
      }
    }
  )
  return { isLoading, data }
}

export default useGetLessonData
