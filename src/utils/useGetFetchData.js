import axios from 'axios'
import { useQuery } from 'react-query'
import { configFunc } from './apiFunc'

const useGetFetchData = (uniqueKey, url, dependencies, enable) => {
  const { error, isLoading, data, refetch } = useQuery(
    [uniqueKey, { ...dependencies }],
    async () => {
      const { data } = await axios.get(url, configFunc())
      return data
    },
    { keepPreviousData: true, enabled: enable }
  )
  return { data, error, isLoading, refetch }
}

export default useGetFetchData
