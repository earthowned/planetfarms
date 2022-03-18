import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { DropdownField } from "common/dropdown";
import { TextAreaField } from "common/text-area";
import { DashboardLayout } from "layout/dashboard";
import { DragDropZoneField } from "common/drag-drop-zone";
import { ActionButton } from "common/buttons/action-button";

import { api } from "api";
import { create } from "actions/newsActions";

import { generatePayload } from "./helpers";
import { NewsBuilder } from "./news-builder";
import {
  model,
  initialValues,
  readTimeOptions,
  categoryOptions,
  validationSchema,
} from "./config";

import "./styles.scss";

export const CreateNewsPage = () => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();

  const [communities, setCommunities] = useState([]);
  const user = useSelector((state) => state.userLogin);

  useEffect(async () => {
    try {
      const { data } = await api.community.userList({ page: 1 });
      const list = data.communities.map((item) => ({
        value: item.id,
        label: item.name,
      }));
      setCommunities(list);
    } catch (error) {
      alert.error(error.message);
    }
  }, []);

  const handleSubmit = async (values) => {
    try {
      const response = await create({
        userId: user.userInfo.id,
        ...generatePayload({ values }),
      })(dispatch);
      history.replace(`/news/${response.newsId}`);
    } catch (error) {
      alert.error(error);
    }
  };

  return (
    <DashboardLayout title="Create News" withBackButton>
      <Formik
        validateOnBlur={false}
        onSubmit={handleSubmit}
        validateOnChange={false}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <Form>
            <div className="create-news-page-container">
              <div className="left-block">
                <TextAreaField
                  maxLength={100}
                  placeholder="Title"
                  name={model.title.name}
                />

                <div className="drag-and-drop-container">
                  <DragDropZoneField
                    name={model.coverImage.name}
                    placeholder="Drag Drop main image in this area or"
                  />
                </div>

                <NewsBuilder name={model.newsContent.name} />
              </div>

              <div className="right-block">
                <DropdownField
                  isSearchable
                  placeholder="Category"
                  options={categoryOptions}
                  name={model.category.name}
                />

                <DropdownField
                  placeholder="Read time"
                  options={readTimeOptions}
                  name={model.readTime.name}
                />

                <DropdownField
                  options={communities}
                  placeholder="Community"
                  name={model.community.name}
                  label={`You can add your news to one\u000A of the communities.`}
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
    </DashboardLayout>
  );
};
