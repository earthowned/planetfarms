import axios from "axios";
import { useQuery } from "react-query";
import { configFunc } from "./apiFunc";

const useGetFetchData = (uniqueKey, url, dependencies, enable) => {
  const { error, isLoading, data, refetch } = useQuery(
    [uniqueKey, { ...dependencies }],
    async () => {
      const { data: response } = await axios.get(url, configFunc());
      return response;
    },
    { keepPreviousData: true, enabled: enable }
  );
  return { data, error, isLoading, refetch };
};

export default useGetFetchData;
