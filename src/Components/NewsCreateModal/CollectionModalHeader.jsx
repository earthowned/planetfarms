import './news-create-modal.css'

const CollectionModalHeader = ({
  title,
  setVideoActive,
  setImageActive,
  setTextActive,
  setGroupActive,
  setGroupEditActive,
}) => {
  return (
    <>
      {title === "Add video" ? (
        <div className="collection-modal-header">
          <h4>{title}</h4>
          <img
            src="/img/close-outline.svg"
            alt="close-icon"
            onClick={() => setVideoActive(false)}
          />
        </div>
      ) : title === "Create Group" ? (
        <div className="collection-modal-header">
          <h4>{title}</h4>
          <img
            src="/img/close-outline.svg"
            alt="close-icon"
            onClick={() => setGroupActive(false)}
          />
        </div>
      ) : title === "Edit Group" ? (
        <div className="collection-modal-header">
          <h4>{title}</h4>
          <img
            src="/img/close-outline.svg"
            alt="close-icon"
            onClick={() => setGroupEditActive(false)}
          />
        </div>
      ) : title === "Add photo" ? (
        <div className="collection-modal-header">
          <h4>{title}</h4>
          <img
            src="/img/close-outline.svg"
            alt="close-icon"
            onClick={() => setImageActive(false)}
          />
        </div>
      ) : (
        <div className="collection-modal-header">
          <h4>{title}</h4>
          <img
            src="/img/close-outline.svg"
            alt="close-icon"
            onClick={() => setTextActive(false)}
          />
        </div>
      )}
    </>
  );
};

export default CollectionModalHeader
