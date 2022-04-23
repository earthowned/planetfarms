import { useState } from "react";

import { Icon } from "common/icon";
import { IconButton } from "common/buttons/icon-button";
import { DownloadButton } from "common/buttons/download-button";

import { FileIconName } from "./config";

import "./styles.scss";

const Material = ({ material, isEditMode = true }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // TODO: Implement downloading functionality;
  const handleDownloadClick = () => {
    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
      setIsCompleted(true);
    }, 2000);
  };

  // TODO: Remove Material from related course;
  const handleRemoveClick = () => {};

  return (
    <div className="material-container">
      <div className="info-container">
        <Icon icon={FileIconName[material.extension]} />
        <h5>{`${material.name}.${material.extension}`}</h5>
      </div>

      <div className="buttons-container">
        <DownloadButton
          isCompleted={isCompleted}
          onClick={handleDownloadClick}
          isDownloading={isDownloading}
        />

        {isEditMode && (
          <IconButton
            icon="trash"
            variant="transparent-red"
            onClick={handleRemoveClick}
          />
        )}
      </div>
    </div>
  );
};

export const MaterialsList = ({
  maxLength,
  materials = [],
  isEditMode = false,
}) => {
  if (materials.length === 0) {
    return null;
  }

  const list = maxLength ? materials.slice(0, maxLength) : materials;

  return (
    <div className="materials-list-container">
      {list.map((material, index) => (
        <Material
          material={material}
          isEditMode={isEditMode}
          key={`material-list-item-${index.toString()}`}
        />
      ))}
    </div>
  );
};
