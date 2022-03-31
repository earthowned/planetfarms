import { useMemo } from "react";
import ReactPlayer from "react-player";

import { useDeviceType } from "hooks";
import { DeviceType, NewsContentType } from "constants/enums";
import { parseArticleImage, parseArticleVideo } from "utils/parsers/news";

import "./styles.scss";

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

const ImageBlock = ({ url, description }) => {
  return (
    <div className="article-image-block">
      <div className="image-container">
        <img src={url} alt="" />
      </div>
      {description && <h5>{description}</h5>}
    </div>
  );
};

const VideoBlock = ({ link, resource, description, title, isMobile }) => {
  const url = resource ? parseArticleVideo(resource) : link;

  return (
    <div className="article-video-block">
      <Title title={title} isMobile={isMobile} />
      <div className="video-container">
        <ReactPlayer
          controls
          url={url}
          width="100%"
          loop={false}
          height="100%"
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
          case NewsContentType.Image:
            return (
              <ImageBlock
                description={item?.photoDescription}
                url={parseArticleImage(item?.lessonImg)}
                key={`article-image-block-${index.toString()}`}
              />
            );

          case NewsContentType.Text:
            return (
              <TextBlock
                isMobile={isMobile}
                title={item?.textHeading}
                text={item?.textDescription}
                key={`article-text-block-${index.toString()}`}
              />
            );

          case NewsContentType.Video:
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
