import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import { api } from "api";
import { useSearchBar } from "providers/search-bar";

export const useFetchNews = ({ filters = [] }) => {
  const alert = useAlert();
  const { searchValue } = useSearchBar();

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setNews([]);
    setCurrentPage(1);
  }, [searchValue, filters]);

  useEffect(() => {
    let cancel;
    setIsLoading(true);

    api.news
      .list({
        filters,
        page: currentPage,
        query: searchValue,
        cancelToken: new axios.CancelToken((c) => {
          cancel = c;
        }),
      })
      .then((response) => {
        const { totalPages: pages, news: list } = response.data;

        setTotalPages(pages);
        setNews((prev) => [...prev, ...list]);
        setIsLastPage(currentPage === pages);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        if (axios.isCancel(error)) return;
        alert.error(error.message);
      });

    return () => cancel();
  }, [currentPage, searchValue, filters]);

  const onLoadMore = useCallback(() => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  }, [totalPages, currentPage]);

  return { news, isLoading, isLastPage, totalPages, onLoadMore };
};