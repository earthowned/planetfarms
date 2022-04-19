import { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import { api } from "api";
import { SortOption } from "constants/enums";
import { mockedCourses } from "utils/mocked";
import { getErrorMessage } from "utils/error";
import { useSearchBar } from "providers/search-bar";

const sortCoursesBy = ({ list = [], sortType }) => {
  return list.sort((a, b) => {
    switch (sortType) {
      case SortOption.Popular: {
        return b.members - a.members;
      }

      case SortOption.Cheap: {
        return a.price - b.price;
      }

      case SortOption.Expensive: {
        return b.price - a.price;
      }

      case SortOption.RateDescending: {
        return b.rating - a.rating;
      }

      case SortOption.RateAscending: {
        return a.rating - b.rating;
      }

      case SortOption.AlphabetDescending: {
        return a.title.localeCompare(b.title);
      }

      case SortOption.AlphabetAscending: {
        return b.title.localeCompare(a.title);
      }

      default:
        return a;
    }
  });
};

export const useCoursesList = ({ filter, sort, withFakeData }) => {
  const alert = useAlert();
  const { searchValue } = useSearchBar();

  const [page, setPage] = useState(1);
  const [courses, setCourses] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const isLastPage = useMemo(() => page === totalPages, [page, totalPages]);

  useEffect(() => {
    if (withFakeData) {
      setCourses(sortCoursesBy({ list: [...mockedCourses], sortType: sort }));
    }
  }, [withFakeData, sort]);

  useEffect(() => {
    let cancel;

    if (!withFakeData) {
      setIsLoading(true);

      api.courses
        .list({
          page,
          sort,
          filter,
          pageSize: 10,
          search: searchValue || "",
          cancelToken: new axios.CancelToken((c) => {
            cancel = c;
          }),
        })
        .then((response) => {
          const { data: list, totalPages: pages } = response?.data || {};

          setTotalPages(pages);
          setCourses((prev) => [...prev, ...list]);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          if (!axios.isCancel(error)) {
            alert.error(getErrorMessage(error));
          }
        });
    }

    return () => {
      if (cancel) cancel();
    };
  }, [page, filter, sort, searchValue, withFakeData]);

  const onLoadMore = useCallback(() => {
    if (page < totalPages) setPage(page + 1);
  }, [totalPages, page]);

  return { courses, page, onLoadMore, isLoading, isLastPage };
};
