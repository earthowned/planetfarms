import ReactPlayer from "react-player";

import { NewsContentType } from "constants/enums";
import { parseArticleImage, parseArticleVideo } from "utils/parsers/news";

import "./styles.scss";

const TextBlock = ({ title, text }) => (
  <div className="article-text-block">
    {title && <h3>{title}</h3>}
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

const VideoBlock = ({ link, resource, description, title }) => {
  const url = resource ? parseArticleVideo(resource) : link;

  return (
    <div className="article-video-block">
      {title && <h3>{title}</h3>}
      <div className="video-container">
        <ReactPlayer
          controls
          url={url}
          width="100%"
          loop={false}
          height="100%"
        />
      </div>
      {description && <h5>{description}</h5>}
    </div>
  );
};

export const ArticleContentList = ({ content = [] }) => {
  if (content.length === 0) return null;

  return (
    <div className="article-content-list-container">
      {content.map((item, index) => {
        console.log(item);
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
                title={item?.textHeading}
                text={item?.textDescription}
                key={`article-text-block-${index.toString()}`}
              />
            );

          case NewsContentType.Video:
            return (
              <VideoBlock
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
