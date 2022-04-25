import { useState } from "react";

import { Icon } from "common/icon";
import { IconButton } from "common/buttons/icon-button";
import { DownloadButton } from "common/buttons/download-button";

import { FileIconName } from "./config";

import "./styles.scss";

const Material = ({
  id,
  material,
  onRemove,
  onDownloaded,
  isDownloaded,
  isEditMode = true,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const iconName = FileIconName[material.extension] || "file";

  // TODO: Implement downloading functionality;
  const handleDownloadClick = () => {
    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
      if (onDownloaded) onDownloaded(id);
    }, 2000);
  };

  // TODO: Remove Material from related course;
  const handleRemoveClick = () => {
    setIsDownloading(false);
    if (onRemove) onRemove(id);
  };

  return (
    <div className="material-container">
      <div className="info-container">
        <Icon icon={iconName} />
        <h5>{`${material.name}.${material.extension}`}</h5>
      </div>

      <div className="buttons-container">
        <DownloadButton
          isCompleted={isDownloaded}
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
  onRemoveMaterial,
  isEditMode = false,
}) => {
  const [downloaded, setDowloaded] = useState([]);

  if (materials.length === 0) {
    return null;
  }

  const list = maxLength ? materials.slice(0, maxLength) : materials;

  const handleDownloadedFile = (id) => setDowloaded([...downloaded, id]);

  const handleRemoveFile = (id) => {
    const filtered = downloaded.filter((d) => d !== id);
    setDowloaded([...filtered]);
    onRemoveMaterial(id);
  };

  return (
    <div className="materials-list-container">
      {list.map((material, index) => {
        return (
          <Material
            id={material.id}
            material={material}
            isEditMode={isEditMode}
            onRemove={handleRemoveFile}
            onDownloaded={handleDownloadedFile}
            key={`material-list-item-${index.toString()}`}
            isDownloaded={downloaded.includes(material.id)}
          />
        );
      })}
    </div>
  );
};
