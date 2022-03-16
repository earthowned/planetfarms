import { Input } from "common/input";
import { TextArea } from "common/text-area";
import { DragDropZone } from "common/drag-drop-zone";
import { IconButton } from "common/buttons/icon-button";

import "./styles.scss";

const FieldBlock = ({ title, onRemove, children }) => {
  return (
    <div className="news-field-block-container">
      <div className="header-container">
        <h6>{title}</h6>

        <IconButton
          icon="cross"
          onClick={onRemove}
          variant="grey-transparent"
        />
      </div>

      {children}
    </div>
  );
};

const TextFieldBlock = ({ onRemove }) => {
  return (
    <FieldBlock title="Text Field" onRemove={onRemove}>
      <Input placeholder="Heading (optional)" />
      <TextArea placeholder="Text" minHeight="96px" />
    </FieldBlock>
  );
};

const PictureFieldBlock = ({ onRemove }) => {
  return (
    <FieldBlock title="Picture Field" onRemove={onRemove}>
      <div className="drag-and-drop-container">
        <DragDropZone
          name="test"
          placeholder="Drag Drop image in this area or"
        />
      </div>

      <Input placeholder="Image Desctiption (optional)" />
    </FieldBlock>
  );
};

const VideoFieldBlock = ({ onRemove }) => {
  return (
    <FieldBlock title="Video Field" onRemove={onRemove}>
      <div className="drag-and-drop-container">
        <DragDropZone
          name="test"
          placeholder="Drag Drop image in this area or"
        />
      </div>

      <Input placeholder="Video Title (optional)" />
      <TextArea placeholder="Description (optional)" minHeight="96px" />

      <Input placeholder="Video Link" />
    </FieldBlock>
  );
};

export const Fields = {
  TextField: TextFieldBlock,
  VideoField: VideoFieldBlock,
  PictureField: PictureFieldBlock,
};
