import { useState } from "react";

import { DashboardLayout } from "layout/dashboard";
import { ActionButton } from "common/buttons/action-button";

import { Filters } from "./filters";

import "./styles.scss";

const mockFilters = ["Farming", "People", "Nature", "Cars industry"];

export const NewsListPage = () => {
  const [filters, setFilters] = useState(mockFilters);
  // const [addFilterVisible, setAddFilterVisible] = useState(false);

  const onFilterRemove = (filterIndex) => {
    setFilters(filters.filter((_, index) => index !== filterIndex));
  };

  return (
    <DashboardLayout title="News">
      <div className="news-page-header">
        <Filters
          filters={filters}
          onRemove={onFilterRemove}
          // onAdd={() => setAddFilterVisible(true)}
        />

        <ActionButton variant="primary" title="Add New" icon="plus" />
      </div>

      <div className="news-list-container" />
    </DashboardLayout>
  );
};
