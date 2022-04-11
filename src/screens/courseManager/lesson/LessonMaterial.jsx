/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { MATERIAL } from "../../../utils/urlConstants";
import DragDrop from "../../../components/dragDrop/DragDrop";
import Material from "../../../components/material/Material";

const LessonMaterial = ({
  material,
  setMaterial,
  materialData,
  removeMaterialModal,
}) => {
  const matData = (mData) => {
    setMaterial(() => [...material, { mData }]);
  };

  const removeItem = (lastModified) => {
    setMaterial(
      material.filter((item) => item?.mData?.lastModified !== lastModified)
    );
  };

  const materialList = [materialData, material].flat().filter(Boolean);
  return (
    <div className="admin-lesson-materials-container">
      <h1>Materials</h1>
      {materialList?.length > 0 ? (
        <div className="material">
          {materialList.map((mater, i) => {
            return (
              <Material
                key={`lesson-material-${i.toString()}`}
                name={mater?.mData ? mater?.mData?.name : mater?.name}
              >
                <a
                  href={
                    mater?.mData
                      ? mater?.mData?.preview
                      : `${MATERIAL}${mater?.material}`
                  }
                  download={mater?.mData ? mater?.mData?.name : mater?.name}
                  target={mater?.mData ? "" : "_blank"}
                  rel="noreferrer"
                >
                  <div>
                    <img src="/img/download-icon.svg" alt="download icon" />{" "}
                    <span>Download</span>
                  </div>
                </a>
                <div
                  onClick={() =>
                    mater?.mData
                      ? removeItem(mater?.mData?.lastModified)
                      : removeMaterialModal(mater?.id)
                  }
                  name={mater?.mData?.name}
                >
                  <img src="/img/trash-icon.svg" alt="trash icon" />
                  <span>Delete</span>
                </div>
              </Material>
            );
          })}
        </div>
      ) : (
        <p>You dont have any materials in lesson Add it for your users.</p>
      )}
      <DragDrop
        fileType="application/pdf,.doc,.txt,application/vnd.ms-powerpoint,application/vnd.ms-excel"
        className="secondary-btn addMaterial"
        text="Add Materials"
        onChange={(mat) => matData(mat)}
        editImg
      />
    </div>
  );
};

export default LessonMaterial;
