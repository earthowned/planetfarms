import { Formik, Form } from "formik";

import { DashboardLayout } from "layout/dashboard";
import { DragDropZone } from "common/drag-drop-zone";
import { Dropdown } from "common/dropdown";
import { ActionButton } from "common/buttons/action-button";
import { TextAreaField } from "common/text-area";

import { NewsBuilder } from "./news-builder";
import { model, initialValues, validationSchema } from "./config";

import "./styles.scss";

const categoryOptions = [
  { value: "farming", label: "Farming" },
  { value: "people", label: "People" },
  { value: "nature", label: "Nature" },
  { value: "cars", label: "Cars industry" },
  { value: "media", label: "Media news" },
  { value: "fertilizer", label: "Fertilizer" },
];

const readTimeOptions = [
  { value: "1min", label: "1 min" },
  { value: "5min", label: "5 min" },
  { value: "10min", label: "10 min" },
  { value: "30min", label: "30 min" },
  { value: "moreAnHour", label: "> 1 hour" },
];

const communitiesOptions = [{ value: "planetFarmm", label: "Planet Farm" }];

export const CreateNewsPage = () => {
  const handleSubmit = (values) => {
    console.log(values);
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
                  <DragDropZone
                    name="kek"
                    placeholder="Drag Drop main image in this area or"
                  />
                </div>

                <NewsBuilder name={model.newsContent.name} />
              </div>
              <div className="right-block">
                <Dropdown
                  isSearchable
                  placeholder="Category"
                  options={categoryOptions}
                  onChange={(value) => console.log(value)}
                />

                <Dropdown placeholder="Read Time" options={readTimeOptions} />

                <Dropdown
                  placeholder="Community"
                  options={communitiesOptions}
                  label={`You can add your news to one\u000A of the communities.`}
                />

                <div className="form-actions-container">
                  <ActionButton variant="secondary" title="Preview" />
                  <ActionButton
                    type="submit"
                    title="Add News"
                    variant="primary"
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
