import { TextBlock, ImageBlock } from "./blocks";

import "./styles.scss";

const isTextBlock = (item) => !!(item.text || item.heading);

const isImageBlock = (item) => !!(item.image || item.description);

// TODO: Union with Article and Lesson;

export const CourseDescription = ({ description = [] }) => {
  return (
    <div className="content-blocks-container">
      {description.map((item, index) => {
        switch (true) {
          case isTextBlock(item):
            return (
              <TextBlock
                text={item.text}
                title={item.title}
                key={`text-block-${index.toString()}`}
              />
            );

          case isImageBlock(item):
            return (
              <ImageBlock
                image={item.image}
                description={item.description}
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
