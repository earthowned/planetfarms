import { useState } from "react";
import { useHistory } from "react-router-dom";

import { DashboardLayout } from "layout/dashboard";
import { ActionButton } from "common/buttons/action-button";
import { NewsListContainer } from "common/containers/news-container";

import { useFetchNews } from "hooks";

import { Filters } from "./filters";
import { FiltersModal } from "./filters-modal";

import "./styles.scss";

export const NewsListPage = () => {
  const history = useHistory();

  const [filters, setFilters] = useState([]);
  const [addFilterVisible, setAddFilterVisible] = useState(false);

  const { news, isLoading, isLastPage, onLoadMore } = useFetchNews({ filters });

  const onFilterRemove = (filter) => {
    setFilters(filters.filter((item) => item !== filter));
  };

  const handleFiltersApply = (selected) => {
    setFilters([...selected]);
    setAddFilterVisible(false);
  };

  return (
    <DashboardLayout title="News">
      <div className="news-page-header">
        <Filters
          filters={filters}
          onRemove={onFilterRemove}
          onAdd={() => setAddFilterVisible(true)}
        />

        <ActionButton
          icon="plus"
          title="Add New"
          variant="primary"
          onClick={() => history.push("/news/create")}
        />
      </div>

      <NewsListContainer
        list={news}
        isLoading={isLoading}
        isLastPage={isLastPage}
        onLoadMore={onLoadMore}
        onNewsClick={(id) => history.push(`/news/${id}`)}
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
