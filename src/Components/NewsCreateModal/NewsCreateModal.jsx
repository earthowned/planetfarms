import { useState } from "react";
import "./news-create-modal.css";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { createEnterprise, } from '../../actions/enterpriseAction'

const NewsCreateModal = ({
  type,
  videoActive,
  setVideoActive,
  imageActive,
  setImageActive,
  textActive,
  setTextActive,
  groupActive,
  setGroupActive,
  groupEditActive,
  setGroupEditActive,
  enterpriseActive,
  setEnterpriseActive
}) => {
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
      {type === "video" && (
        <CreateVideo
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          files={files}
          videoActive={videoActive}
          setVideoActive={setVideoActive}
        />
      )}
       {type === "enterprise" && (
        <CreateEnterprise
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          files={files}
          enterpriseActive={enterpriseActive}
          setEnterpriseActive={setEnterpriseActive}
        />
      )}
      {type === "group" && (
        <CreateGroup
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          files={files}
          groupActive={groupActive}
          setGroupActive={setGroupActive}
        />
      )}
      {type === "edit-group" && (
        <EditGroup
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          files={files}
          groupEditActive={groupEditActive}
          setGroupEditActive={setGroupEditActive}
        />
      )}
      {type === "image" && (
        <CreateImage
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          files={files}
          imageActive={imageActive}
          setImageActive={setImageActive}
        />
      )}
      {type === "text" && (
        <CreateText
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          files={files}
          textActive={textActive}
          setTextActive={setTextActive}
        />
      )}
    </>
  );
};

const CreateVideo = ({
  getRootProps,
  getInputProps,
  files,
  videoActive,
  setVideoActive,
}) => {
  return (
    <>
      {videoActive && (
        <div className="collection-modal-container">
          <div className="collection-modal-inner-container">
            <CollectionModalHeader
              title="Add video"
              setVideoActive={setVideoActive}
            />
            <DragDrop
              getInputProps={getInputProps}
              getRootProps={getRootProps}
              files={files}
            />
            <VideoInputContainer />
            <Button name="Add Video block" />
          </div>
        </div>
      )}
    </>
  );
};
const CreateGroup = ({
  getRootProps,
  getInputProps,
  files,
  groupActive,
  setGroupActive,
}) => {
  return (
    <>
      {groupActive && (
        <div className="collection-modal-container">
          <div className="collection-modal-inner-container">
            <CollectionModalHeader
              title="Create Group"
              setGroupActive={setGroupActive}
            />
            <DragDrop
              getInputProps={getInputProps}
              getRootProps={getRootProps}
              files={files}
            />
            <GroupInputContainer />
            <Link to="/my-group-view-page">
              <Button name="Create Group" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
const EditGroup = ({
  getRootProps,
  getInputProps,
  files,
  groupEditActive,
  setGroupEditActive,
}) => {
  return (
    <>
      {groupEditActive && (
        <div className="collection-modal-container">
          <div className="collection-modal-inner-container">
            <CollectionModalHeader
              title="Edit Group"
              setGroupEditActive={setGroupEditActive}
            />
            <DragDrop
              getInputProps={getInputProps}
              getRootProps={getRootProps}
              files={files}
            />
            <GroupEditContainer />
            <button className="button-delete">
              <img className="trash-icon" src="/img/trash-icon.svg" /> Delete
              Groups
            </button>
            <div>
              <Link to="/my-group-view-page">
                <Button name="Edit Group" />
              </Link>
              <button
                className="button-cancel"
                onClick={() => setGroupEditActive(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const CreateEnterprise = ({
  getRootProps,
  getInputProps,
  files,
  enterpriseActive,
  setEnterpriseActive,
}) => {
  return (
    <>
      {enterpriseActive && (
        <div className="collection-modal-container">
          <div className="collection-modal-inner-container">
            <CollectionModalHeader
              title="Create Enterprise"
              setEnterpriseActive={setEnterpriseActive}
            />
            <DragDrop
              getInputProps={getInputProps}
              getRootProps={getRootProps}
              files={files}
            />
            <EnterpriseInputContainer   setEnterpriseActive={setEnterpriseActive} />
          </div>
        </div>
      )}
    </>
  );
};

const CreateImage = ({
  getRootProps,
  getInputProps,
  files,
  imageActive,
  setImageActive,
}) => {
  return (
    <>
      {imageActive && (
        <div className="collection-modal-container">
          <div className="collection-modal-inner-container">
            <CollectionModalHeader
              title="Add photo"
              setImageActive={setImageActive}
            />

            <DragDrop
              getInputProps={getInputProps}
              getRootProps={getRootProps}
              files={files}
            />

            <PhotoInput />
            <Button name="Add block" />
          </div>
        </div>
      )}
    </>
  );
};

function TextInputContainer() {
  return (
    <div className="photo-input-container">
      <input
        className="default-input-variation"
        placeholder="Collection title"
      ></input>
      <br />
      <textarea
        className="default-input-variation text-area-variation-2"
        placeholder="Type text here "
      ></textarea>
    </div>
  );
}

const DragDrop = ({ getInputProps, getRootProps, files }) => {
  return (
    <div className="drag-drop" {...getRootProps()}>
      <input {...getInputProps()} />
      {files.length > 0 ? (
        <img className="avatar" src={files[0].preview} />
      ) : (
        <h6 className="text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
          Drag & Drop files in this area or Click Here to attach video cover
        </h6>
      )}
    </div>
  );
};

const CollectionModalHeader = ({
  title,
  setVideoActive,
  setImageActive,
  setTextActive,
  setGroupActive,
  setGroupEditActive,
  setEnterpriseActive
}) => {
  return (
    <>
      {title === "Add video" ? (
        <div className="collection-modal-header">
          <h4>{title}</h4>
          <img
            src="/img/close-outline.png"
            alt="close-icon"
            onClick={() => setVideoActive(false)}
          />
        </div>
      )  : title === "Create Enterprise" ? (
        <div className="collection-modal-header">
          <h4>{title}</h4>
          <img
            src="/img/close-outline.svg"
            alt="close-icon"
            onClick={() => setEnterpriseActive(false)}
          />
        </div>
      ) : title === "Create Group" ? (
        <div className="collection-modal-header">
          <h4>{title}</h4>
          <img
            src="/img/close-outline.svg"
            alt="close-icon"
            onClick={() => setGroupActive(false)}
          />
        </div>
      ) : title === "Edit Group" ? (
        <div className="collection-modal-header">
          <h4>{title}</h4>
          <img
            src="/img/close-outline.svg"
            alt="close-icon"
            onClick={() => setGroupEditActive(false)}
          />
        </div>
      ) : title === "Add photo" ? (
        <div className="collection-modal-header">
          <h4>{title}</h4>
          <img
            src="/img/close-outline.png"
            alt="close-icon"
            onClick={() => setImageActive(false)}
          />
        </div>
      ) : (
        <div className="collection-modal-header">
          <h4>{title}</h4>
          <img
            src="/img/close-outline.png"
            alt="close-icon"
            onClick={() => setTextActive(false)}
          />
        </div>
      )}
    </>
  );
};

const VideoInputContainer = () => {
  return (
    <div className="video-input-container">
      <input
        className="default-input-variation"
        placeholder="Video title"
      ></input>
      <br />
      <textarea
        className="default-input-variation text-area-variation"
        placeholder="Video description"
        cols="3"
        rows="3"
      ></textarea>

      <div className="video-row-3">
        <input
          className="default-input-variation last-input-variation"
          placeholder="Video link"
        ></input>{" "}
        <span>OR</span> <button className="secondary-btn">Choose video</button>
      </div>
    </div>
  );
};
const GroupInputContainer = () => {
  return (
    <div className="video-input-container">
      <input
        className="default-input-variation"
        placeholder="Group title"
        required="true"
      ></input>
      <br />
      <textarea
        className="default-input-variation text-area-variation"
        placeholder="Group description"
        required="true"
        cols="3"
        rows="3"
      ></textarea>
    </div>
  );
};
const GroupEditContainer = () => {
  return (
    <div className="video-input-container">
      <input
        className="default-input-variation"
        placeholder="Edit Title"
        required="true"
        value="Think like a farmer"
      ></input>
      <br />
      <textarea
        className="default-input-variation text-area-variation"
        placeholder="Edit description"
        required="true"
        cols="3"
        rows="3"
        value="Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!"
      ></textarea>
    </div>
  );
};

const EnterpriseInputContainer = ({setEnterpriseActive}) => {
  const [title, setEnterpriseTitle] = useState('')
  const [description, setEnterpriseDescription] = useState('')
  const [enterpriseTitleError, setEnterpriseTitleError] = useState(false)
  const [enterpriseDescriptionError, setEnterpriseDescriptionError] = useState(false)
  const dispatch = useDispatch()

  const enterpriseTitleChange = (e) => {
    setEnterpriseTitle(e.target.value)
    setEnterpriseTitleError(false)
  }
  const enterpriseDescriptionChange = (e) => {
    setEnterpriseDescription(e.target.value)
    setEnterpriseDescriptionError(false)
  }
  const handleAddEnterprise = (e) => {
    e.preventDefault()
    if (!title) setEnterpriseTitleError(true)
    if (!description) setEnterpriseDescriptionError(true)
    if (title && description) {
      dispatch(createEnterprise({ title, description, }))
      setEnterpriseActive(false)
      
    }
  }
  return (
    <div className="video-input-container">
      <input
        className="default-input-variation"
        placeholder="Enterprise title"
        required="true"
        error={enterpriseTitleError}
        onChange={(e) => enterpriseTitleChange(e)}
      ></input>
      <br />
      <textarea
        className="default-input-variation text-area-variation"
        placeholder="Enterprise description"
        required="true"
        cols="3"
        rows="3"
        error={enterpriseDescriptionError}
        onChange={(e) => enterpriseDescriptionChange(e)}
      ></textarea>
       <select className="default-input-variation">
                <option>Select category</option>
                <option>Farmer</option>
              </select>
              <button className="default-btn btn-size" onClick={handleAddEnterprise}>Submit</button>
    </div>
  );
};

const Button = ({ name }) => {
  return <button className="default-btn btn-size">{name}</button>;
};

function PhotoInput() {
  return (
    <>
      <div className="description">
        <label>Add photo description</label> <ToggleSwitch />
      </div>

      <div className="photo-input-container">
        <input
          className="default-input-variation"
          placeholder="Photo description"
        ></input>
      </div>
    </>
  );
}

const CreateText = ({ textActive, setTextActive }) => {
  return (
    <>
      {textActive && (
        <div className="collection-modal-container">
          <div className="collection-modal-inner-container">
            <CollectionModalHeader
              title="Add text"
              setTextActive={setTextActive}
            />
            <TextInputContainer />
            <Button name="Add block" />
          </div>
        </div>
      )}
    </>
  );
};

function ToggleSwitch() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="toggle-main-container">
        <div
          onClick={() => setActive(!active)}
          className={`${active ? "toggle-item active" : "toggle-item"}`}
        ></div>
        <div className="toggle-container"></div>
      </div>
    </>
  );
}
export default NewsCreateModal;
