import { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

import { DashboardLayout } from "layout/dashboard";
import { ActionButton } from "common/buttons/action-button";
import { NewsListContainer } from "common/containers/news-container";

import { api } from "api";

import { Filters } from "./filters";
import { FiltersModal } from "./filters-modal";

import "./styles.scss";

export const NewsListPage = () => {
  const alert = useAlert();
  const history = useHistory();

  const [filters, setFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [addFilterVisible, setAddFilterVisible] = useState(false);

  const [page, setPage] = useState(1);
  const [news, setNews] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const onFilterRemove = (filter) => {
    setFilters(filters.filter((item) => item !== filter));
  };

  const handleFiltersApply = (selected) => {
    setFilters([...selected]);
    setAddFilterVisible(false);
  };

  useEffect(async () => {
    try {
      // TODO - Need to fetch news from all user communities;
      // TODO - Implement search when search bar will be ready;
      // TODO - Need to fetch with array of filters;
      // TODO - Cancel request when search query changed;
      // TODO - Store news in redux;

      setIsLoading(true);
      const response = await api.news.list({ community: 1, page });

      setTotalPages(response.totalPages);
      setNews((prev) => [...prev, ...response.news]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert.error(error.message);
    }
  }, [page]);

  return (
    <DashboardLayout title="News">
      <div className="news-page-header">
        <Filters
          filters={filters}
          onRemove={onFilterRemove}
          onAdd={() => setAddFilterVisible(true)}
        />

        <ActionButton variant="primary" title="Add New" icon="plus" />
      </div>

      <NewsListContainer
        list={news}
        isLoading={isLoading}
        isLastPage={page === totalPages}
        onNewsClick={(id) => history.push(`/news/${id}`)}
        onLoadMore={() => {
          if (page < totalPages) setPage(page + 1);
        }}
      />

      <FiltersModal
        selectedFilters={filters}
        visible={addFilterVisible}
        onApply={handleFiltersApply}
        onClose={() => setAddFilterVisible(false)}
      />
    </DashboardLayout>
  );
};
