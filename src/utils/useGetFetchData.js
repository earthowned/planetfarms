import axios from 'axios'
import { useQuery } from 'react-query'
import { configFunc } from './apiFunc'

const useGetFetchData = (uniqueKey, url) => {
  const { error, isLoading, data, refetch } = useQuery(uniqueKey, async () => {
    const { data } = await axios.get(url, configFunc())
    return data
  })
  return { data, error, isLoading, refetch }
}

export default useGetFetchData
