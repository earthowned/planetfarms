import { useState, useMemo, useEffect } from "react";
import { useAlert } from "react-alert";
import { Formik, Form, FieldArray } from "formik";

import { DropdownField } from "common/dropdown";
import { TextAreaField } from "common/text-area";
import { DragDropZoneField } from "common/drag-drop-zone";
import { ActionButton } from "common/buttons/action-button";

import { api } from "api";
import { getErrorMessage } from "utils/error";
import { NewsContentType, ArticleEditorType } from "constants/enums";

import { NewsActions } from "./actions";
import { TextFieldBlock, ImageFieldBlock, VideoFieldBlock } from "./fields";
import {
  model,
  readTimeOptions,
  categoryOptions,
  validationSchema,
  initialValues,
} from "./config";

import "./styles.scss";

export const ArticleEditor = ({ article, onSubmit, onPreview, type }) => {
  const alert = useAlert();
  const [communities, setCommunities] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await api.community.userList({ page: 1 });
      const list = data.communities.map((item) => ({
        value: item.id,
        label: item.name,
      }));
      setCommunities(list);
    } catch (error) {
      alert.error(getErrorMessage(error));
    }
  }, []);

  const formInitialValues = useMemo(() => {
    if (type === ArticleEditorType.Create) return initialValues;
    return {};
  }, [type]);

  return (
    <Formik
      enableReinitialize
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={formInitialValues}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <Form>
          <div className="article-editor-container">
            <div className="left-block">
              <TextAreaField
                maxLength={100}
                placeholder="Title"
                name={model.title.name}
              />

              <DragDropZoneField
                type="Image"
                name={model.coverImage.name}
                mobilePlaceholder="Upload cover image"
                placeholder="Drag & Drop cover image in this area or"
              />

              <FieldArray name={model.newsContent.name}>
                {({ push, remove }) => (
                  <>
                    {values[model.newsContent.name].map((item, index) => {
                      const fieldName = `${model.newsContent.name}[${index}].data`;

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
            </div>

            <div className="right-block">
              <DropdownField
                isSearchable
                placeholder="Category"
                options={categoryOptions}
                name={model.category.name}
              />

              <DropdownField
                options={readTimeOptions}
                placeholder="Reading time"
                name={model.readTime.name}
              />

              <DropdownField
                options={communities}
                placeholder="Community"
                name={model.community.name}
                label="You can add your news to one of the communities."
              />

              <div className="form-actions-container">
                <ActionButton variant="secondary" title="Preview" />

                <ActionButton
                  type="submit"
                  title="Add News"
                  variant="primary"
                  disabled={values[model.newsContent.name].length === 0}
                />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
