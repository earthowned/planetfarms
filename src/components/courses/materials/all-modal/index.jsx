import { SideModal } from "common/side-modal";

import { MaterialsList } from "../list";

import "./styles.scss";

const actionProps = {
  icon: "plus",
  variant: "secondary",
  title: "Add Material",
};

export const AllMaterialsModal = ({
  visible,
  onAdd,
  onClose,
  materials,
  isEditMode,
}) => {
  return (
    <SideModal
      title="Materials"
      visible={visible}
      onClose={onClose}
      actionProps={{ ...actionProps, onClick: onAdd }}
    >
      <div className="materials-side-modal-container">
        <MaterialsList materials={materials} isEditMode={isEditMode} />
      </div>
    </SideModal>
  );
};
