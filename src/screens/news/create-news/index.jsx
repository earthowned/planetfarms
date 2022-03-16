import { Input } from "common/input";
import { DashboardLayout } from "layout/dashboard";
import { DragDropZone } from "common/drag-drop-zone";

import { NewsBuilder } from "./news-builder";

import "./styles.scss";

export const CreateNewsPage = () => {
  return (
    <DashboardLayout title="Create News" withBackButton>
      <div className="create-news-page-container">
        <div className="left-block">
          <Input placeholder="Title" />

          <div className="drag-and-drop-container">
            <DragDropZone
              name="kek"
              placeholder="Drag Drop main image in this area or"
            />
          </div>

          <NewsBuilder />
        </div>
        <div className="right-block">
          <Input placeholder="Category" />
        </div>
      </div>
    </DashboardLayout>
  );
};
