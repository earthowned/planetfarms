import { DashboardLayout } from "layout/dashboard";
import { DragDropZone } from "common/drag-drop-zone";
import { Dropdown } from "common/dropdown";
import { ActionButton } from "common/buttons/action-button";
import { TextArea } from "common/text-area";

import { NewsBuilder } from "./news-builder";

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
  return (
    <DashboardLayout title="Create News" withBackButton>
      <div className="create-news-page-container">
        <div className="left-block">
          <TextArea placeholder="Title" maxLength={100} />

          <div className="drag-and-drop-container">
            <DragDropZone
              name="kek"
              placeholder="Drag Drop main image in this area or"
            />
          </div>

          <NewsBuilder />
        </div>
        <div className="right-block">
          <Dropdown
            isSearchable
            placeholder="Category"
            options={categoryOptions}
          />

          <Dropdown placeholder="Read Time" options={readTimeOptions} />

          <Dropdown
            placeholder="Community"
            options={communitiesOptions}
            label={`You can add your news to one\u000A of the communities.`}
          />

          <div className="form-actions-container">
            <ActionButton variant="secondary" title="Preview" />
            <ActionButton variant="primary" title="Add News" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
