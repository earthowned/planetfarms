import { FieldArray, useField } from "formik";

import { NewsContentType } from "constants/enums";

import { NewsActions } from "./actions";
import { TextFieldBlock, ImageFieldBlock, VideoFieldBlock } from "./fields";

import "./styles.scss";

export const NewsBuilder = ({ name }) => {
  const [field] = useField(name);

  return (
    <FieldArray name={name}>
      {({ push, remove }) => (
        <>
          {field.value.map((item, index) => {
            const fieldName = `${name}[${index}].data`;

            switch (item.type) {
              case NewsContentType.Text: {
                return (
                  <TextFieldBlock
                    name={fieldName}
                    onRemove={() => remove(index)}
                    key={`text-field-block-${index.toString()}`}
                  />
                );
              }

              case NewsContentType.Image: {
                return (
                  <ImageFieldBlock
                    name={fieldName}
                    onRemove={() => remove(index)}
                    key={`picture-field-block-${index.toString()}`}
                  />
                );
              }

              case NewsContentType.Video: {
                return (
                  <VideoFieldBlock
                    name={fieldName}
                    onRemove={() => remove(index)}
                    key={`video-field-block-${index.toString()}`}
                  />
                );
              }

              default:
                return null;
            }
          })}

          <NewsActions
            onAddText={() => push({ type: NewsContentType.Text })}
            onAddVideo={() => push({ type: NewsContentType.Video })}
            onAddImage={() => push({ type: NewsContentType.Image })}
          />
        </>
      )}
    </FieldArray>
  );
};
