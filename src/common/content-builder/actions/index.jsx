import { ContentBuilderAction } from "constants/enums";
import { IconButton } from "common/buttons/icon-button";

const buttonData = {
  [ContentBuilderAction.Text]: { icon: "file", title: "Text" },
  [ContentBuilderAction.Image]: { icon: "camera", title: "Picture" },
  [ContentBuilderAction.Video]: { icon: "youtube", title: "Video" },
};

export const Actions = ({
  onAddText,
  onAddImage,
  onAddVideo,
  actions = [],
}) => {
  return (
    <div className="actions-container">
      {actions.includes(ContentBuilderAction.Text) && (
        <IconButton
          onClick={onAddText}
          variant="news-builder"
          {...buttonData[ContentBuilderAction.Text]}
        />
      )}

      {actions.includes(ContentBuilderAction.Image) && (
        <IconButton
          onClick={onAddImage}
          variant="news-builder"
          {...buttonData[ContentBuilderAction.Image]}
        />
      )}

      {actions.includes(ContentBuilderAction.Video) && (
        <IconButton
          onClick={onAddVideo}
          variant="news-builder"
          {...buttonData[ContentBuilderAction.Video]}
        />
      )}
    </div>
  );
};
