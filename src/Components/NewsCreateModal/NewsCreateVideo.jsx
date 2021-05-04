import { useState } from "react"
import "./news-create-modal.css"
import Button from "../Button/Button"

const CreateVideo = ({ getRootProps, getInputProps, files, videoActive, setVideoActive }) => {
  const [videoTitle, setVideoTitle] = useState()
  const [videoDescription, setVideoDescription] = useState()

  const [videoTitleError, setVideoTitleError] = useState()
  const [videoDescriptionError, setVideoDescriptionError] = useState()

  const videoTitleChange = (e) => {
    setVideoTitle(e.target.value)
    setVideoTitleError(false)
  }
  const videoDescriptionChange = (e) => {
    setVideoDescription(e.target.value)
    setVideoDescriptionError(false)
  }

  const addVideo = () => {
    if (!videoTitle) setVideoTitleError(true)
    if (!videoDescription) setVideoDescriptionError(true)
    if (videoTitle && videoDescription) {
      console.log(videoTitle, videoDescription)
      setVideoActive(false)
    }
  }
  return (
    <>
      {videoActive && (
        <div className="collection-modal-container">
          <div className="collection-modal-inner-container">
            <div className="collection-modal-header">
              <h4>Add video</h4>
              <img
                src="/img/close-outline.svg"
                alt="close-icon"
                onClick={() => setVideoActive(false)}
              />
            </div>
            <div className="drag-drop" {...getRootProps()}>
              <input {...getInputProps()} />
              {files.length > 0 ? (
                <img className="avatar" src={files[0].preview} alt={files[0].preview} />
              ) : (
                <h6 className="text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  Drag & Drop files in this area or Click Here to attach video cover
                </h6>
              )}
            </div>
            <div className="video-input-container">
              <input
                className="default-input-variation"
                placeholder="Video title"
                value={videoTitle}
                onChange={(e) => videoTitleChange(e)}
              ></input>
              <p className="error-message">{videoTitleError ? 'Please enter Video Title' : " "} </p>
              <br />
              <textarea
                className="default-input-variation text-area-variation"
                placeholder="Video description"
                cols="3"
                rows="3"
                value={videoDescription}
                onChange={(e) => videoDescriptionChange(e)}
              ></textarea>
              <p className="error-message">{videoDescriptionError ? 'Please enter Video Description' : " "} </p>

              <div className="video-row-3">
                <input
                  className="default-input-variation last-input-variation"
                  placeholder="Video link"
                ></input>{" "}
                <span>OR</span> <button className="secondary-btn">Choose video</button>
              </div>
            </div>
            <Button name="Add Video block" clickHandler={addVideo} />
          </div>
        </div>
      )}
    </>
  )
}

export default CreateVideo
