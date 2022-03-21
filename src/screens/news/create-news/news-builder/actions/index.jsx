import { IconButton } from "common/buttons/icon-button";

export const NewsActions = ({ onAddText, onAddImage, onAddVideo }) => {
  const data = [
    { icon: "file", title: "Text", onClick: onAddText },
    { icon: "camera", title: "Picture", onClick: onAddImage },
    { icon: "youtube", title: "Video", onClick: onAddVideo },
  ];

  return (
    <div className="news-actions-container">
      {data.map((item) => (
        <IconButton
          icon={item.icon}
          title={item.title}
          variant="news-builder"
          onClick={item.onClick}
          key={`news-action-button-${item.title}`}
        />
      ))}
    </div>
  );
};
