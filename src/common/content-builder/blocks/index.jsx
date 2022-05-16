import { useMemo } from "react";
import { useField } from "formik";
import ReactPlayer from "react-player";

import { InputField } from "common/input";
import { TextAreaField } from "common/text-area";
import { IconButton } from "common/buttons/icon-button";
import { DragDropZoneField } from "common/drag-drop-zone";
import { ImageDragAndDropZoneField } from "common/drop-zone";

import { isFileInstanse } from "utils/parsers/file";
import { parseArticleVideo } from "utils/parsers/news";
import { GET_VIDEO, LESSON_IMG } from "utils/urlConstants";

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

export const Text = ({ name, onRemove }) => {
  return (
    <FieldBlock title="Text Field" onRemove={onRemove}>
      <InputField
        name={`${name}.textHeading`}
        placeholder="Heading (optional)"
      />
      <TextAreaField
        minHeight="96px"
        placeholder="Text"
        name={`${name}.textDescription`}
      />
    </FieldBlock>
  );
};

export const Image = ({ name, onRemove, isFromCourse }) => {
  return (
    <FieldBlock title="Picture Field" onRemove={onRemove}>
      {isFromCourse ? (
        <ImageDragAndDropZoneField
          sizeType="rectangle"
          name={`${name}.lessonImg`}
        />
      ) : (
        <DragDropZoneField
          type="Image"
          downloadUrl={LESSON_IMG}
          name={`${name}.lessonImg`}
        />
      )}

      <InputField
        name={`${name}.photoDescription`}
        placeholder="Image Desctiption (optional)"
      />
    </FieldBlock>
  );
};

export const Video = ({ name, onRemove }) => {
  const [field] = useField(name);
  const { videoResource, videoLink } = field?.value || {};

  const videoUrl = useMemo(() => {
    if (videoResource) {
      return isFileInstanse(videoResource)
        ? URL.createObjectURL(videoResource)
        : parseArticleVideo(videoResource);
    }

    if (videoLink) {
      return videoLink;
    }

    return null;
  }, [videoResource, videoLink]);

  const isFileVisible = useMemo(() => {
    if (videoUrl) return false;
    if (videoLink) return false;
    return true;
  }, [videoLink, videoUrl]);

  const isLinkVisible = useMemo(() => {
    if (videoResource) return false;
    return true;
  }, [videoResource]);

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
        <DragDropZoneField
          type="Video"
          downloadUrl={GET_VIDEO}
          name={`${name}.videoResource`}
        />
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
          name={`${name}.videoDescription`}
          placeholder="Description (optional)"
        />
      )}
    </FieldBlock>
  );
};
