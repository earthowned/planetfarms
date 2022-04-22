import { useState } from "react";

import { Icon } from "common/icon";
import { DownloadButton } from "common/buttons/download-button";

import { BlockHeader } from "../header";
import { EmptyBllock } from "../empty-block";

import { FileIconName } from "./config";

import "./styles.scss";

const Material = ({ material }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
      setIsCompleted(true);
    }, 2000);
  };

  return (
    <div className="material-container">
      <div className="info-container">
        <Icon icon={FileIconName[material.extension]} />
        <h5>{`${material.name}.${material.extension}`}</h5>
      </div>

      <DownloadButton
        isCompleted={isCompleted}
        onClick={handleDownloadClick}
        isDownloading={isDownloading}
      />
    </div>
  );
};

export const MeterialsList = ({ materials = [], maxLength }) => {
  if (materials.length === 0) {
    return null;
  }

  const list = maxLength ? materials.slice(0, maxLength) : materials;

  return (
    <div className="materials-list-container">
      {list.map((material, index) => (
        <Material
          material={material}
          key={`material-list-item-${index.toString()}`}
        />
      ))}
    </div>
  );
};

export const MeterialsBlock = ({ materials = [], withAddButton = true }) => {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  return (
    <div className="materials-block-container">
      <BlockHeader title="Materials" onViewAll={() => {}} />

      <MeterialsList materials={materials} maxLength={4} />

      <EmptyBllock
        imageSize="small"
        variant="Material"
        isAddButtonVisible={withAddButton}
        isImageVisible={materials.length === 0}
        onAdd={() => setIsAddModalVisible(!isAddModalVisible)}
      />
    </div>
  );
};

export const MaterialsModal = () => {};
