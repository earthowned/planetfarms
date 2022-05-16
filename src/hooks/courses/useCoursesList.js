import { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import { api } from "api";
import { getErrorMessage } from "utils/error";
import { useSearchBar } from "providers/search-bar";

export const useCoursesList = ({ filter, sort }) => {
  const alert = useAlert();
  const { searchValue } = useSearchBar();

  const [page, setPage] = useState(1);
  const [courses, setCourses] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [currentSort, setCurrentSort] = useState(null);
  const [currentFilter, setCurrentFilter] = useState(null);

  const isLastPage = useMemo(() => page === totalPages, [page, totalPages]);

  const payload = useMemo(() => {
    return {
      page,
      sort,
      filter,
      pageSize: 10,
      search: searchValue || "",
    };
  }, [page, filter, sort, searchValue]);

  useEffect(async () => {
    let cancel;

    try {
      setIsLoading(true);
      const response = await api.courses.list({
        ...payload,
        cancelToken: new axios.CancelToken((c) => {
          cancel = c;
        }),
      });

      const { data: list, totalPages: pages } = response?.data || {};

      if (filter !== currentFilter || sort !== currentSort) {
        setCourses([...list]);
      } else {
        setCourses((prev) => [...prev, ...list]);
      }

      setIsLoading(false);
      setTotalPages(pages);
      setCurrentSort(sort);
      setCurrentFilter(filter);
    } catch (error) {
      setIsLoading(false);
      if (!axios.isCancel(error)) {
        alert.error(getErrorMessage(error));
      }
    }

    return () => {
      if (cancel) cancel();
    };
  }, [page, filter, sort, searchValue]);

  const onLoadMore = useCallback(() => {
    if (page < totalPages) setPage(page + 1);
  }, [totalPages, page]);

  return { courses, page, onLoadMore, isLoading, isLastPage };
};
