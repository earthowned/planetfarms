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
            const fieldName = `${name}[${index}]`;

            switch (item.type) {
              case NewsContentType.Text: {
                return (
                  <TextFieldBlock
                    onRemove={() => remove(index)}
                    textFieldName={`${fieldName}.text`}
                    titleFieldName={`${fieldName}.title`}
                    key={`text-field-block-${index.toString()}`}
                  />
                );
              }

              case NewsContentType.Image: {
                return (
                  <ImageFieldBlock
                    onRemove={() => remove(index)}
                    fileFieldName={`${fieldName}.imageFile`}
                    key={`picture-field-block-${index.toString()}`}
                    descriptionFieldName={`${fieldName}.imageDescription`}
                  />
                );
              }

              // case ContentType.Video: {
              //   return (
              //     <Fields.VideoField
              //       videoFileName={`${fieldName}.videoFile`}
              //       videoTitleName={`${fieldName}.videoTitle`}
              //       video={`${fieldName}.videoTitle`}
              //       onRemove={() => remove(index)}
              //       key={`video-field-block-${index.toString()}`}
              //     />
              //   );
              // }

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
