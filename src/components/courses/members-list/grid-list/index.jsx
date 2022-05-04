import { useMemo } from "react";
import cx from "classnames";

import { MemberListItem, ItemVariant } from "../member-item";

import "./styles.scss";

export const MembersListItemGrid = {
  row: "row",
  column: "column",
};

const MemberItemVariant = {
  [MembersListItemGrid.row]: ItemVariant.Grid,
  [MembersListItemGrid.column]: ItemVariant.List,
};

export const MembersListGrid = ({ list = [], grid, onSelectMember }) => {
  const className = useMemo(
    () =>
      cx("members-list-container", {
        [`members-list-container-${grid}`]: true,
      }),
    [grid]
  );

  return (
    <div className={className}>
      {list.map((item, index) => (
        <MemberListItem
          name={item.name}
          avatar={item.avatar}
          variant={MemberItemVariant[grid]}
          key={`member-item-${index.toString()}`}
          onClick={() => onSelectMember(item.id)}
        />
      ))}
    </div>
  );
};
