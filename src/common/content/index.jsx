import { ContentBuilderAction } from "constants/enums";

import { TextBlock, ImageBlock } from "./blocks";

import "./styles.scss";

export const ContentBlocks = ({ contentList = [] }) => {
  return (
    <div className="content-blocks-container">
      {contentList.map((content, index) => {
        switch (content.type) {
          case ContentBuilderAction.Text:
            return (
              <TextBlock
                text={content.text}
                title={content.title}
                key={`text-block-${index.toString()}`}
              />
            );

          case ContentBuilderAction.Image:
            return (
              <ImageBlock
                image={content.url}
                description={content.description}
                key={`image-block-${index.toString()}`}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
};
