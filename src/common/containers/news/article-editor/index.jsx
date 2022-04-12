import { useMemo, useEffect } from "react";
import { Formik, Form } from "formik";
import { useAlert } from "react-alert";

import { DropdownField } from "common/dropdown";
import { TextAreaField } from "common/text-area";
import { DragDropZoneField } from "common/drag-drop-zone";
import { ActionButton } from "common/buttons/action-button";
import { ContentBuilderField } from "common/content-builder";

import { api } from "api";
import { useStateIfMounted } from "hooks";
import { getErrorMessage } from "utils/error";
import { GET_NEWS } from "utils/urlConstants";
import { ContentBuilderAction } from "constants/enums";

import { getInitialValues } from "./helpers";
import {
  model,
  readTimeOptions,
  categoryOptions,
  validationSchema,
  ActionButtonTitle,
} from "./config";

import "./styles.scss";

export const ArticleEditor = ({ article, onSubmit, onPreview, type }) => {
  const alert = useAlert();
  const [communities, setCommunities] = useStateIfMounted([]);

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

  const initialValues = useMemo(
    () => getInitialValues({ article, communities }),
    [article, communities]
  );

  const onPreviewClick = (values) => {
    onPreview(values);
  };

  const handleFormSubmit = (values) => {
    onSubmit({ initialValues, values });
  };

  return (
    <Formik
      enableReinitialize
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ values }) => {
        return (
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
                  downloadUrl={GET_NEWS}
                  name={model.coverImage.name}
                  mobilePlaceholder="Upload cover image"
                  placeholder="Drag & Drop cover image in this area or"
                />

                <ContentBuilderField
                  name={model.newsContent.name}
                  actions={[
                    ContentBuilderAction.Text,
                    ContentBuilderAction.Image,
                    ContentBuilderAction.Video,
                  ]}
                />
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
                  <ActionButton
                    title="Preview"
                    variant="secondary"
                    onClick={() => onPreviewClick(values)}
                  />

                  <ActionButton
                    type="submit"
                    variant="primary"
                    title={ActionButtonTitle[type]}
                    disabled={values[model.newsContent.name].length === 0}
                  />
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
