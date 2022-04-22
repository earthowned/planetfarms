import { useState } from "react";

import { Icon } from "common/icon";
import { SideModal } from "common/side-modal";
import { IconButton } from "common/buttons/icon-button";
import { DownloadButton } from "common/buttons/download-button";

import { BlockHeader } from "../header";
import { EmptyBllock } from "../empty-block";

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

const MaterialsList = ({ materials = [], maxLength, isEditMode = false }) => {
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

export const MeterialsBlock = ({
  materials = [],
  isEditMode = false,
  withAddButton = true,
}) => {
  const [isAllVisible, setIsAllVisible] = useState(false);
  const [isAddVisible, setIsAddVisible] = useState(false);

  return (
    <div className="materials-block-container">
      <BlockHeader
        title="Materials"
        onViewAll={materials.length > 0 ? () => setIsAllVisible(true) : null}
      />

      <MaterialsList materials={materials} maxLength={4} />

      <EmptyBllock
        imageSize="small"
        variant="Material"
        isAddButtonVisible={withAddButton}
        onAdd={() => setIsAddVisible(true)}
        isImageVisible={materials.length === 0}
      />

      <SideModal
        title="Materials"
        visible={isAllVisible}
        onClose={() => setIsAllVisible(false)}
        actionProps={{
          icon: "plus",
          variant: "secondary",
          title: "Add Material",
          onClick: () => setIsAddVisible(true),
        }}
      >
        <div className="materials-side-modal-container">
          <MaterialsList materials={materials} isEditMode={isEditMode} />
        </div>
      </SideModal>
    </div>
  );
};
