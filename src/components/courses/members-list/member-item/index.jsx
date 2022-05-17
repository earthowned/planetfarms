import cx from "classnames";

import { Icon } from "common/icon";
import { Avatar } from "common/avatar";

import "./styles.scss";

export const ItemVariant = { Grid: "grid", List: "list" };

const ViewAllComponent = () => (
  <div className="view-all-absolute-container">
    <h4>View All</h4>
    <Icon icon="chevron-right" />
  </div>
);

export const MemberListItem = ({
  name,
  avatar,
  onClick,
  isLastPreviewItem,
  variant = ItemVariant.Grid,
}) => {
  const className = cx("member-container", {
    [`member-container-${variant}`]: true,
    "member-container-last-preview": isLastPreviewItem,
  });

  return (
    <div className={className} onClick={onClick}>
      <Avatar src={avatar} placeholderIcon="person" />
      <h4>{name}</h4>
      {isLastPreviewItem && <ViewAllComponent />}
    </div>
  );
};
