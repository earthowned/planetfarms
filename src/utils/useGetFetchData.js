import { useQuery } from 'react-query'
import { Axios } from './urlConstants'

const useGetFetchData = (uniqueKey, url) => {
  const { error, isLoading, data } = useQuery(uniqueKey, async () => {
    const { data } = await Axios.get(url)
    return data
  })
  return { data, error, isLoading }
}

export default useGetFetchData
