import { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./collection-modal.css";

const CollectionModal = ({ setActive, openAddCollection }) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  return (
    <>
      <div className="collection-modal-container">
        <div className="collection-modal-inner-container">
          <div className="collection-modal-header">
            <h4>Create Collection</h4>
            <img
              src="/img/close-outline.png"
              onClick={() => setActive(false)}
              alt="close-icon"
            />
          </div>

          <div className="drag-drop" {...getRootProps()}>
            <input {...getInputProps()} />
            {files.length > 0 ? (
              <img className="avatar" src={files[0].preview} />
            ) : (
              <h6 className="text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                Drag and Drop files in this area or Click Here to attach
              </h6>
            )}
          </div>

          <div className="collection-input-container">
            <input
              className="default-input-variation"
              placeholder="Collection title"
            ></input>
            <br />
            <select
              className="default-input-variation"
              placeholder="Collection title"
            >
              <option>Select category</option>
              <option>Travelling</option>
            </select>
          </div>
          <div className="add-collection">
            <img src="/img/plus.svg" />{" "}
            <button onClick={() => openAddCollection()}>
              Create new collection
            </button>
          </div>
          <button className="default-btn btn-size">Add files</button>
        </div>
      </div>
    </>
  );
};

export default CollectionModal;
