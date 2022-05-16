import { FieldArray, useField } from "formik";

import { ContentBuilderAction } from "constants/enums";

import * as Blocks from "./blocks";
import { Actions } from "./actions";

import "./styles.scss";

const ContentBuilderField = ({ actions = [], name, label, isFromCourse }) => {
  const [field] = useField(name);

  if (!name) return null;

  return (
    <FieldArray name={name}>
      {({ push, remove }) => (
        <div className="content-builder-container">
          {label && <h3>{label}</h3>}

          {field.value.map((item, index) => {
            const fieldName = `${name}[${index}].data`;

            switch (item.type) {
              case ContentBuilderAction.Text:
                return (
                  <Blocks.Text
                    name={fieldName}
                    onRemove={() => remove(index)}
                    key={`text-field-block-${index.toString()}`}
                  />
                );

              case ContentBuilderAction.Image:
                return (
                  <Blocks.Image
                    name={fieldName}
                    isFromCourse={isFromCourse}
                    onRemove={() => remove(index)}
                    key={`picture-field-block-${index.toString()}`}
                  />
                );

              case ContentBuilderAction.Video:
                return (
                  <Blocks.Video
                    name={fieldName}
                    onRemove={() => remove(index)}
                    key={`video-field-block-${index.toString()}`}
                  />
                );

              default:
                return null;
            }
          })}

          <Actions
            actions={actions}
            onAddText={() => push({ type: ContentBuilderAction.Text })}
            onAddVideo={() => push({ type: ContentBuilderAction.Video })}
            onAddImage={() => push({ type: ContentBuilderAction.Image })}
          />
        </div>
      )}
    </FieldArray>
  );
};

export { ContentBuilderField };
export { contentBuilderValidationSchema } from "./config";
