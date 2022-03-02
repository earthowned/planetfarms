import { IconButton } from "common/buttons/icon-button";
import { ActionButton } from "common/buttons/action-button";

import "./styles.scss";

export const Filters = ({ filters = [], onRemove, onAdd }) => {
  const filtersToPresent = filters.slice(0, 10);

  return (
    <div className="filters-container">
      <h4>{filters.length > 0 ? "Filters:" : "Filter by:"}</h4>

      {filtersToPresent.map((filter, index) => (
        <ActionButton
          title={filter}
          rightIcon="cross"
          variant="secondary"
          onClick={() => onRemove(index)}
          key={`${filter}-${index.toString()}`}
        />
      ))}

      <IconButton variant="secondary" icon="plus" onClick={onAdd} />
    </div>
  );
};
