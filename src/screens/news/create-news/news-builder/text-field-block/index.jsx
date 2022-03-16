import { Input } from "common/input";
import { TextArea } from "common/text-area";
import { IconButton } from "common/buttons/icon-button";

export const TextFieldBlock = ({ title, content, onRemove }) => {
  return (
    <div className="news-text-field-block-container">
      <div className="header-container">
        <h6>Text Field</h6>
        <IconButton
          icon="cross"
          onClick={onRemove}
          variant="grey-transparent"
        />
      </div>

      <Input value={title} placeholder="Heading (optional)" />

      <TextArea placeholder="Text" value={content} minHeight="96px" />
    </div>
  );
};
