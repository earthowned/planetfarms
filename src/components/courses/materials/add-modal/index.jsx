import { ActionModal } from "common/modal-containers";

export const AddMaterialsModal = ({ visible, onClose }) => {
  return (
    <ActionModal title="Add Materials" visible={visible} onClose={onClose} />
  );
};
