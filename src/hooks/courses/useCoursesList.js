import { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import { api } from "api";
import { SortOption } from "constants/enums";
import { getErrorMessage } from "utils/error";
import { useSearchBar } from "providers/search-bar";

export const mockedAllCourses = [
  {
    id: 0,
    title: "A Fueling the ethanol industry",
    price: 2333,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864,0,1728,2304&wid=600&hei=800&scl=2.88",
    category: "Farm",
    rating: 4,
    progress: 12,
    members: 20,
  },
  {
    id: 1,
    title: "B Fueling the ethanol industry",
    price: 2599,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar: null,
    category: "Farm",
    rating: 5,
    progress: 70,
    members: 10,
  },
  {
    id: 2,
    title: "C Fueling the ethanol industry",
    price: 122,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar: null,
    category: "Farm",
    rating: 5,
    progress: 40,
    members: 50,
  },
  {
    id: 3,
    title: "Fueling the ethanol industry",
    price: 2599,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864,0,1728,2304&wid=600&hei=800&scl=2.88",
    category: "Farm",
    rating: 1,
    progress: 40,
    members: 100,
  },
  {
    id: 4,
    title: "Fueling the ethanol industry",
    price: 2599,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar: null,
    category: "Farm",
    rating: 2,
    progress: 45,
    members: 0,
  },
  {
    id: 5,
    title: "Fueling the ethanol industry",
    price: 3400,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864,0,1728,2304&wid=600&hei=800&scl=2.88",
    category: "Farm",
    rating: 3,
    progress: 90,
    members: 200,
  },
];

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
      setCourses(sortCoursesBy({ list: mockedAllCourses, sortType: sort }));
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
