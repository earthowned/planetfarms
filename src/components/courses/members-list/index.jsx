import { MembersListPreview } from "./preview";
import { MembersListGrid, MembersListItemGrid } from "./grid-list";

const Variant = { List: "list", Preview: "preview" };

const MembersList = ({
  list = [],
  onViewAll,
  maxLength,
  onSelectMember,
  variant = Variant.Preview,
  grid = MembersListItemGrid.row,
}) => {
  if (!list || list.length === 0) return null;

  if (variant === Variant.Preview) {
    return (
      <MembersListPreview
        list={list}
        onViewAll={onViewAll}
        maxLength={maxLength}
        onSelectMember={onSelectMember}
      />
    );
  }

  if (variant === Variant.List) {
    return (
      <MembersListGrid
        list={list}
        grid={grid}
        onViewAll={onViewAll}
        onSelectMember={onSelectMember}
      />
    );
  }

  return null;
};

export { MembersListItemGrid, MembersList, MembersListPreview };
