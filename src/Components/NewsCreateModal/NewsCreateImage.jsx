import { useState } from "react"
import "./news-create-modal.css"
import Button from "../Button/Button"

const CreateImage = ({ getRootProps, getInputProps, files, imageActive, setImageActive }) => {
  const [imageDescription, setImageDescription] = useState()

  const [imageDescriptionError, setImageDescriptionError] = useState()

  const imageDescriptionChange = (e) => {
    setImageDescription(e.target.value)
    setImageDescriptionError(false)
  }

  const addImage = () => {
    if (!imageDescription) setImageDescriptionError(true)
    if (imageDescription) {
      console.log(imageDescription)
      setImageActive(false)
    }
  }
  return (
    <>
      {imageActive && (
        <div className="collection-modal-container">
          <div className="collection-modal-inner-container">
            <div className="collection-modal-header">
              <h4>"Add photo"</h4>
              <img
                src="/img/close-outline.png"
                alt="close-icon"
                onClick={() => setImageActive(false)}
              />
            </div>

            <div className="drag-drop" {...getRootProps()}>
              <input {...getInputProps()} />
              {files.length > 0 ? (
                <img className="avatar" src={files[0].preview} alt={files[0].preview} />
              ) : (
                <h6 className="text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  Drag & Drop files in this area or Click Here to attach image cover
                </h6>
              )}
            </div>

            <div className="description">
              <label>Add photo description</label> <ToggleSwitch />
            </div>

            <div className="photo-input-container">
              <input
                className="default-input-variation"
                placeholder="Photo description"
                value={imageDescription}
                onChange={(e) => imageDescriptionChange(e)}
              ></input>
              <p className="error-message">{imageDescriptionError ? 'Please enter Video Description' : " "} </p>
            </div>
            <Button name="Add block" clickHandler={addImage} />
          </div>
        </div>
      )}
    </>
  )
}

function ToggleSwitch() {
  const [active, setActive] = useState(false)
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
  )
}

export default CreateImage
