import axios from 'axios'
import { useQuery } from 'react-query'
import { configFunc } from './apiFunc'

const useGetFetchData = (uniqueKey, url, dependencies) => {
  const { error, isLoading, data, refetch } = useQuery([uniqueKey, { ...dependencies }], async () => {
    const { data } = await axios.get(url, configFunc())
    return data
  }, { keepPreviousData: true })
  return { data, error, isLoading, refetch }
}

export default useGetFetchData
