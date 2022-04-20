import { useState } from "react";

import { BlockHeader } from "../header";
import { EmptyBllock } from "../empty-block";

import "./styles.scss";

export const MeterialsList = ({ materials = [] }) => {
  if (materials.length === 0) {
    return null;
  }

  return <div />;
};

export const MeterialsBlock = ({ materials = [] }) => {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  return (
    <div className="materials-block-container">
      <BlockHeader title="Materials" onViewAll={() => {}} />

      <MeterialsList materials={materials} />

      {materials.length === 0 && (
        <EmptyBllock
          imageSize="small"
          variant="Material"
          onAdd={() => setIsAddModalVisible(!isAddModalVisible)}
        />
      )}
    </div>
  );
};

export const MaterialsModal = () => {};
