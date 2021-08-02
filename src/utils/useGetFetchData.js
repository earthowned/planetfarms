import axios from 'axios'
import { useQuery } from 'react-query'
import { configFunc } from './apiFunc'

const useGetFetchData = (uniqueKey, url, pageNumber) => {
  const { error, isLoading, data } = useQuery([uniqueKey, pageNumber], async () => {
    const { data } = await axios.get(url, configFunc())
    return data
  }, { keepPreviousData: true })
  return { data, error, isLoading }
}

export default useGetFetchData
