// import { useState } from "react";
import { FieldArray, useField } from "formik";

import { Fields } from "./fields";
import { ContentType } from "./config";
import { NewsActions } from "./actions";

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
              case ContentType.TextField: {
                return (
                  <Fields.TextField
                    onRemove={() => remove(index)}
                    textFieldName={`${fieldName}.text`}
                    titleFieldName={`${fieldName}.title`}
                    key={`text-field-block-${index.toString()}`}
                  />
                );
              }

              case ContentType.Picture: {
                return (
                  <Fields.PictureField
                    onRemove={() => remove(index)}
                    fileFieldName={`${fieldName}.imageFile`}
                    key={`picture-field-block-${index.toString()}`}
                    descriptionFieldName={`${fieldName}.imageDescription`}
                  />
                );
              }

              default:
                return null;
            }
          })}

          <NewsActions
            onAddVideo={() => push({ type: ContentType.Video })}
            onAddImage={() => push({ type: ContentType.Picture })}
            onAddText={() => push({ type: ContentType.TextField })}
          />
        </>
      )}
    </FieldArray>
  );
};
