import { useState, useMemo } from "react";

import { ContentType } from "constants/enums";
import { DragAndDropZone } from "common/drop-zone";
import { ActionModal } from "common/modal-containers";

import { MaterialsList } from "../list";
import { getFilesData } from "./helpers";

export const AddMaterialsModal = ({ visible, onClose }) => {
  const [files, setFiles] = useState([]);

  const list = useMemo(() => getFilesData(files), [files]);

  const handleDropFiles = (newFiles) => {
    const identified = newFiles.map((file) => ({
      file,
      id: Math.floor(Math.random() * 100),
    }));

    setFiles((prev) => [...prev, ...identified]);
  };

  const handleRemoveMaterial = (id) => {
    const filtered = files.filter((item) => item.id !== id);
    setFiles([...filtered]);
  };

  const handleAddClick = () => {};

  const actionBtnProps = useMemo(() => {
    return { disabled: files.length === 0, onClick: handleAddClick };
  }, [files]);

  return (
    <ActionModal
      visible={visible}
      onClose={onClose}
      title="Add Materials"
      actionButtonProps={actionBtnProps}
    >
      <DragAndDropZone
        isMultiple
        onDrop={handleDropFiles}
        type={ContentType.Material}
      />

      <MaterialsList
        isEditMode
        materials={list}
        onRemoveMaterial={handleRemoveMaterial}
      />
    </ActionModal>
  );
};
