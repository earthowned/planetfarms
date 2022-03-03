import { useMemo, useState } from "react";

import { SideModal } from "common/side-modal";
import { ActionButton } from "common/buttons/action-button";

import "./styles.scss";

const mockFilters = [
  "Farming",
  "People",
  "Nature",
  "Cars industry",
  "People",
  "Media news",
  "Nature",
  "Fertilizer",
];

export const FiltersModal = ({
  visible,
  onClose,
  onApply,
  selectedFilters = [],
}) => {
  const [selected, setSelected] = useState(selectedFilters);

  const otherFilters = useMemo(() => {
    return mockFilters.filter((filter) => !selected.includes(filter));
  }, [selected]);

  const onSelect = (filter) => {
    setSelected([...selected, filter]);
  };

  const onDeselect = (filter) => {
    setSelected(selected.filter((item) => item !== filter));
  };

  return (
    <SideModal
      visible={visible}
      onClose={onClose}
      title="Add Filters"
      actionTitle="Apply"
      onActionClick={() => onApply(selected)}
    >
      <div className="filters-modal-container">
        <div className="filter-section-container">
          <div className="row-container">
            <h4>Selected:</h4>

            <ActionButton
              title="Clear All"
              variant="transparent-red"
              disabled={!selected.length}
              onClick={() => setSelected([])}
            />
          </div>

          <div className="filters-row-container">
            {selected.map((filter, index) => (
              <ActionButton
                title={filter}
                variant="primary"
                rightIcon="cross"
                onClick={() => onDeselect(filter)}
                key={`selected-${filter}-${index.toString()}`}
              />
            ))}
          </div>
        </div>

        <div className="filter-section-container">
          <h4>Other tags:</h4>

          <div className="filters-row-container">
            {otherFilters.map((filter, index) => (
              <ActionButton
                title={filter}
                variant="secondary"
                onClick={() => onSelect(filter)}
                key={`other-${filter}-${index.toString()}`}
              />
            ))}
          </div>
        </div>
      </div>
    </SideModal>
  );
};
