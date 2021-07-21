import { useQuery } from 'react-query'
import { GET_LESSONS, Axios, GET_COURSE } from './urlConstants'

const useGetLessonData = (id, setMaterialData, userId, setPath) => {
  const { isLoading, data, refetch } = useQuery(
    'lessonData',
    async () => {
      const { data } = await Axios.get(GET_LESSONS + `/${id}`)
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
  return { isLoading, data, refetch }
}

export default useGetLessonData
