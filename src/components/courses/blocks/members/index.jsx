import { useCallback } from "react";
import cx from "classnames";

import { Icon } from "common/icon";
import { Avatar } from "common/avatar";

import "./styles.scss";

const ViewAllComponent = () => (
  <div className="view-all-container">
    <h4>View All</h4>
    <Icon icon="chevron-right" />
  </div>
);

export const MembersBlock = ({ list = [], onSelectMember, onViewAll }) => {
  if (!list || list.length === 0) return null;

  const members = list.slice(0, 6);

  const isLastItem = useCallback(
    (index) => index === members.length - 1,
    [members]
  );

  const getClassName = useCallback(
    (index) => {
      const classname = "member-container";
      return cx(classname, { [`${classname}-last-member`]: isLastItem(index) });
    },
    [members]
  );

  return (
    <div className="members-container">
      <div className="scroll-container">
        {members.map((item, index) => (
          <div
            className={getClassName(index)}
            key={`member-container-${index.toString()}`}
            onClick={() => (isLastItem ? onViewAll() : onSelectMember(item.id))}
          >
            <Avatar src={item.avatar} placeholderIcon="person" />
            <h4>{item.name}</h4>

            {isLastItem(index) && <ViewAllComponent />}
          </div>
        ))}
      </div>
    </div>
  );
};
