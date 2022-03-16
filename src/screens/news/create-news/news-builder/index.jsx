import { useState } from "react";
import { IconButton } from "common/buttons/icon-button";

import { Fields } from "./fields";
import { ContentType } from "./config";

import "./styles.scss";

const NewsActions = ({ onAddText, onAddImage, onAddVideo }) => {
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

export const NewsBuilder = () => {
  const [content, setContent] = useState([]);

  const onAddField = (type) => {
    setContent([...content, { type }]);
  };

  const onRemoveField = (index) => {
    setContent(content.filter((_, i) => i !== index));
  };

  return (
    <div className="news-builder-container">
      {content.map((item, index) => {
        switch (item.type) {
          case ContentType.TextField: {
            return (
              <Fields.TextField
                onRemove={() => onRemoveField(index)}
                key={`text-field-block-${index.toString()}`}
              />
            );
          }

          case ContentType.Picture: {
            return (
              <Fields.PictureField
                onRemove={() => onRemoveField(index)}
                key={`picture-field-block-${index.toString()}`}
              />
            );
          }

          case ContentType.Video: {
            return (
              <Fields.VideoField
                onRemove={() => onRemoveField(index)}
                key={`video-field-block-${index.toString()}`}
              />
            );
          }

          default:
            return null;
        }
      })}

      <NewsActions
        onAddVideo={() => onAddField(ContentType.Video)}
        onAddImage={() => onAddField(ContentType.Picture)}
        onAddText={() => onAddField(ContentType.TextField)}
      />
    </div>
  );
};
