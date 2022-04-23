import { useState } from "react";

// TODO: REFACTOR
import { BlockHeader } from "../../blocks/header";
import { EmptyBllock } from "../../blocks/empty-block";

import { MaterialsList } from "../list";
import { AddMaterialsModal } from "../add-modal";
import { AllMaterialsModal } from "../all-modal";

import "./styles.scss";

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

      <AddMaterialsModal
        visible={isAddVisible}
        onClose={() => setIsAddVisible(false)}
      />

      <AllMaterialsModal
        materials={materials}
        visible={isAllVisible}
        isEditMode={isEditMode}
        onAdd={() => setIsAddVisible(true)}
        onClose={() => setIsAllVisible(false)}
      />
    </div>
  );
};
