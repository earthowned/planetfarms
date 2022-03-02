import { useState } from "react";

import { SideModal } from "common/side-modal";
import { DashboardLayout } from "layout/dashboard";
import { ActionButton } from "common/buttons/action-button";

import { Filters } from "./filters";

import "./styles.scss";

const mockFilters = ["Farming", "People", "Nature", "Cars industry"];

export const NewsListPage = () => {
  const [filters, setFilters] = useState(mockFilters);
  const [addFilterVisible, setAddFilterVisible] = useState(true);

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

      <SideModal
        title="Add Filters"
        visible={addFilterVisible}
        onClose={() => setAddFilterVisible(false)}
      />
    </DashboardLayout>
  );
};
