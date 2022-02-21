import { useState } from "react";
import Cropper from "react-easy-crop";

import { CommonModal } from "common/modal";
import { ActionButton } from "common/buttons/action-button";

import { getCroppedImage } from "./helpers";

import "./styles.scss";

export const CropperModal = ({
  image,
  onCrop,
  visible,
  onClose,
  ...cropperProps
}) => {
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [pixelCrop, setPixelCrop] = useState(undefined);

  const handleCrop = async () => {
    // console.log(crop);
    try {
      const file = await getCroppedImage({ src: image, pixelCrop });
      onCrop(file);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CommonModal visible={visible} onClose={onClose} title="Crop Photo">
      <div className="cropper-modal-container">
        <div className="cropper-container">
          {image && (
            <Cropper
              showGrid
              crop={crop}
              zoom={zoom}
              image={image}
              zoomWithScroll
              aspect={1 / 1}
              cropShape="rect"
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={(_, pixels) => setPixelCrop({ ...pixels })}
              {...cropperProps}
            />
          )}
        </div>

        <div className="buttons-container">
          <ActionButton title="Cancel" variant="secondary" onClick={onClose} />

          <ActionButton title="Save" variant="primary" onClick={handleCrop} />
        </div>
      </div>
    </CommonModal>
  );
};
