import { useCallback } from "react";
import { MemberListItem } from "../member-item";
import "./styles.scss";

export const MembersListPreview = ({
  list = [],
  onViewAll,
  maxLength = 6,
  onSelectMember,
}) => {
  const members = list ? list.slice(0, maxLength) : [];

  const isLastItem = useCallback(
    (index) => index === members.length - 1,
    [members]
  );

  return (
    <div className="members-preview-container">
      <div className="scroll-container">
        {members.map((item, index) => (
          <MemberListItem
            variant="grid"
            name={item.name}
            avatar={item.avatar}
            isLastPreviewItem={isLastItem(index)}
            key={`member-item-${index.toString()}`}
            onClick={
              isLastItem(index)
                ? () => onViewAll()
                : () => onSelectMember(item.id)
            }
          />
        ))}
      </div>
    </div>
  );
};
