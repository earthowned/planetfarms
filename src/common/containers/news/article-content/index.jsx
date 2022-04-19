import { useMemo, useEffect } from "react";
import ReactPlayer from "react-player";

import { useDeviceType } from "hooks";
import { isFileInstanse } from "utils/parsers/file";
import { DeviceType, ContentBuilderAction } from "constants/enums";
import { parseArticleImage, parseArticleVideo } from "utils/parsers/news";

import "./styles.scss";

// TODO: Refactor;
// TODO: Use blocks in News flow from common/content;

const Title = ({ isMobile, title }) => {
  if (!title) return null;
  if (title === "undefined") return null;
  return isMobile ? <h4>{title}</h4> : <h3>{title}</h3>;
};

const TextBlock = ({ title, text, isMobile }) => (
  <div className="article-text-block">
    <Title title={title} isMobile={isMobile} />
    {text && <h5>{text}</h5>}
  </div>
);

const ImageBlock = ({ image, description }) => {
  const getImageUrl = (src) => {
    if (isFileInstanse(src)) return URL.createObjectURL(src);
    return parseArticleImage(src);
  };

  useEffect(
    () => () => {
      if (isFileInstanse(image)) {
        URL.revokeObjectURL(image);
      }
    },
    [image]
  );

  return (
    <div className="article-image-block">
      <div className="image-container">
        <img src={getImageUrl(image)} alt="" />
      </div>
      {description && <h5>{description}</h5>}
    </div>
  );
};

const VideoBlock = ({ link, resource, description, title, isMobile }) => {
  const getUrl = (videoSrc, videoLink) => {
    if (videoSrc) {
      if (isFileInstanse(videoSrc)) return URL.createObjectURL(videoSrc);
      return parseArticleVideo(videoSrc);
    }
    if (videoLink) return videoLink;
    return null;
  };

  useEffect(
    () => () => {
      if (resource && isFileInstanse(resource)) {
        URL.revokeObjectURL(resource);
      }
    },
    [resource]
  );

  return (
    <div className="article-video-block">
      <Title title={title} isMobile={isMobile} />
      <div className="video-container">
        <ReactPlayer
          controls
          width="100%"
          loop={false}
          height="100%"
          url={getUrl(resource, link)}
        />
      </div>
      {description && description !== "undefined" && <h5>{description}</h5>}
    </div>
  );
};

export const ArticleContentList = ({ content = [] }) => {
  const device = useDeviceType();

  const isMobile = useMemo(() => device === DeviceType.Mobile, [device]);

  return (
    <div className="article-content-list-container">
      {content.map((item, index) => {
        switch (item.type) {
          case ContentBuilderAction.Image:
            return (
              <ImageBlock
                description={item?.photoDescription}
                // url={parseArticleImage(item?.lessonImg)}
                image={item?.lessonImg}
                key={`article-image-block-${index.toString()}`}
              />
            );

          case ContentBuilderAction.Text:
            return (
              <TextBlock
                isMobile={isMobile}
                title={item?.textHeading}
                text={item?.textDescription}
                key={`article-text-block-${index.toString()}`}
              />
            );

          case ContentBuilderAction.Video:
            return (
              <VideoBlock
                isMobile={isMobile}
                link={item?.videoLink}
                title={item?.videoTitle}
                resource={item?.videoResource}
                description={item?.videoDescription}
                key={`article-video-block-${index.toString()}`}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
};
