import { useState } from "react";

import { DashboardLayout } from "layout/dashboard";
import { ActionButton } from "common/buttons/action-button";

import { Filters } from "./filters";
import { FiltersModal } from "./filters-modal";

import "./styles.scss";

export const NewsListPage = () => {
  const [filters, setFilters] = useState([]);
  const [addFilterVisible, setAddFilterVisible] = useState(false);

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

        <ActionButton variant="primary" title="Add New" icon="plus" />
      </div>

      <div className="news-list-container" />

      <FiltersModal
        selectedFilters={filters}
        visible={addFilterVisible}
        onApply={handleFiltersApply}
        onClose={() => setAddFilterVisible(false)}
      />
    </DashboardLayout>
  );
};
