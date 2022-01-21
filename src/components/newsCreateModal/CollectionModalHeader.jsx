import "./NewsCreateModal.scss";

const CollectionModalHeader = ({ title, clickHandler }) => {
  return (
    <Image
      title={title}
      src="/img/close-outline.svg"
      alt="close-icon"
      clickHandler={() => clickHandler()}
    />
  );
};

export default CollectionModalHeader;

const Image = ({ title, src, alt, clickHandler }) => {
  return (
    <div className="collection-modal-header">
      <h3>{title}</h3>
      <img src={src} alt={alt} onClick={clickHandler} />
    </div>
  );
};
