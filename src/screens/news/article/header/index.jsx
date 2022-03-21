import { Avatar } from "common/avatar";

export const Header = ({ user, showMore, onEdit, onRemove }) => {
  return (
    <div className="article-page-header">
      <div className="top-container">
        <div className="user-info-container">
          <Avatar src={user.avatar} placeholderIcon="person" />
          <h4>{user.firstName}</h4>
        </div>
      </div>
    </div>
  );
};
