import { useMemo } from "react";
import { useField } from "formik";
import ReactPlayer from "react-player";

import { InputField } from "common/input";
import { TextAreaField } from "common/text-area";
import { IconButton } from "common/buttons/icon-button";
import { DragDropZoneField } from "common/drag-drop-zone";

import { isFileInstanse } from "utils/parsers/file";

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

export const TextFieldBlock = ({ name, onRemove }) => {
  return (
    <FieldBlock title="Text Field" onRemove={onRemove}>
      <InputField placeholder="Heading (optional)" name={`${name}.title`} />
      <TextAreaField
        minHeight="96px"
        placeholder="Text"
        name={`${name}.text`}
      />
    </FieldBlock>
  );
};

export const ImageFieldBlock = ({ name, onRemove }) => {
  return (
    <FieldBlock title="Picture Field" onRemove={onRemove}>
      <DragDropZoneField type="Image" name={`${name}.imageFile`} />

      <InputField
        name={`${name}.imageDescription`}
        placeholder="Image Desctiption (optional)"
      />
    </FieldBlock>
  );
};

export const VideoFieldBlock = ({ name, onRemove }) => {
  const [field] = useField(name);
  const { videoFile, videoLink } = field?.value || {};

  const videoUrl = useMemo(() => {
    if (videoFile) {
      return isFileInstanse(videoFile)
        ? URL.createObjectURL(videoFile)
        : videoFile;
    }

    if (videoLink) {
      return videoLink;
    }

    return null;
  }, [videoFile, videoLink]);

  const isFileVisible = useMemo(() => {
    if (videoUrl) return false;
    if (videoLink) return false;
    return true;
  }, [videoLink, videoUrl]);

  const isLinkVisible = useMemo(() => {
    if (videoFile) return false;
    return true;
  }, [videoFile]);

  return (
    <FieldBlock title="Video Field" onRemove={onRemove}>
      {videoUrl && (
        <div className="video-player-container">
          <ReactPlayer
            controls
            width="100%"
            loop={false}
            height="100%"
            url={videoUrl}
          />
        </div>
      )}

      {isFileVisible && (
        <DragDropZoneField type="Video" name={`${name}.videoFile`} />
      )}

      {isLinkVisible && isFileVisible && <h4>or</h4>}

      {isLinkVisible && (
        <InputField name={`${name}.videoLink`} placeholder="Video Link" />
      )}

      {videoUrl && (
        <InputField
          name={`${name}.videoTitle`}
          placeholder="Video Title (optional)"
        />
      )}

      {videoUrl && (
        <TextAreaField
          minHeight="96px"
          name={`${name}.description`}
          placeholder="Description (optional)"
        />
      )}
    </FieldBlock>
  );
};
