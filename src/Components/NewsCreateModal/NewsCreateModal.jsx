import {useState} from 'react'
import "./news-create-modal.css";
import {useDropzone} from 'react-dropzone';

const NewsCreateModal = ({type, videoActive, setVideoActive, imageActive, setImageActive, textActive, setTextActive, }) => {
    const [files, setFiles] = useState([])
   
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })
    return (
        <>
           { type === "video" && <CreateVideo getRootProps={getRootProps} getInputProps={getInputProps} files={files} videoActive={videoActive} setVideoActive={setVideoActive} />}
           {type === "image" && <CreateImage getRootProps={getRootProps} getInputProps={getInputProps} files={files} imageActive={imageActive} setImageActive={setImageActive}/>}
           {type === "text" && <CreateText getRootProps={getRootProps} getInputProps={getInputProps} files={files} textActive={textActive} setTextActive={setTextActive}/>}
        </>
    )
}

const CreateVideo = ({ getRootProps, getInputProps, files, videoActive, setVideoActive }) => {
    return (
        <>
            {videoActive &&  <div className="collection-modal-container">
                <div className="collection-modal-inner-container">
                <CollectionModalHeader title="Add video" setVideoActive={setVideoActive}/>
                 <DragDrop getInputProps={getInputProps} getRootProps={getRootProps} files={files} />
                <VideoInputContainer />
                <Button name="Add Video block" />
                </div>
            </div>}
        </>
    )
}

const CreateImage = ({ getRootProps, getInputProps, files, imageActive, setImageActive }) => {
    return (
        <>
              {imageActive &&  <div className="collection-modal-container">
                <div className="collection-modal-inner-container">
                    <CollectionModalHeader title="Add photo" setImageActive={setImageActive} />
                
                <DragDrop getInputProps={getInputProps} getRootProps={getRootProps} files={files} />
                     
                <PhotoInput />
                <Button name="Add block" />                
                </div>
            </div>}
        </>
    )
}

function TextInputContainer () {
    return (
          <div className="photo-input-container">
            <input className="default-input-variation" placeholder="Collection title">
            </input><br />
             <textarea className="default-input-variation text-area-variation-2" placeholder="Type text here">
            </textarea>
        </div>
    )
}


const DragDrop = ({getInputProps, getRootProps, files}) => {
return(
     <div className="drag-drop" {...getRootProps()}>
                    <input {...getInputProps()} />
                    {files.length > 0 ? <img className="avatar" src={files[0].preview} /> : 
                    <h6 className="text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                   Drag & Drop files in this area or Click Here to attach video cover</h6>}
    </div>          
)
}

const CollectionModalHeader = ({title,setVideoActive, setImageActive, setTextActive}) => {
    return(
        <>
        {
            title === "Add video" ? (<div className="collection-modal-header">
                <h4>{title}</h4>
                <img src="/img/close-outline.png"  alt="close-icon" onClick={() => setVideoActive(false)}/>
        </div>) : title === "Add photo" ? (<div className="collection-modal-header">
                <h4>{title}</h4>
                <img src="/img/close-outline.png"  alt="close-icon" onClick={() => setImageActive(false)}/>
        </div>) : (<div className="collection-modal-header">
                <h4>{title}</h4>
                <img src="/img/close-outline.png"  alt="close-icon" onClick={() => setTextActive(false)}/>
        </div>)
        }
        </>
    )
}

const VideoInputContainer = () => {
    return(
        <div className="video-input-container">
                    <input className="default-input-variation" placeholder="Video title">
                        
                    </input><br />
                    <textarea className="default-input-variation text-area-variation" placeholder="Video description"></textarea> 
                    
                    <div className="video-row-3">
                        <input className="default-input-variation last-input-variation" placeholder="Video link">
                        </input> <span>OR</span> <button className="secondary-btn">Choose video</button>
              </div>
    </div>
    )
}

const Button = ({name}) => {
    return (
        <button className="default-btn btn-size">{name}</button>
    )
}

function PhotoInput () {
    return (
    <>
    <div className="description">
         <label>Add photo description</label> <ToggleSwitch />
    </div>

    <div className="photo-input-container">
    <input className="default-input-variation" placeholder="Photo description">         
    </input>
    </div>
    </>
    )
}

const CreateText = ({ textActive, setTextActive }) => {
    return (
        <>
               {textActive &&  <div className="collection-modal-container">
                <div className="collection-modal-inner-container">
                    <CollectionModalHeader title="Add text" setTextActive={setTextActive}/>
                    <TextInputContainer />
                    <Button name="Add block" />
                </div>
            </div>}
        </>
    )
}

function ToggleSwitch () {
    const[active, setActive] = useState(false);
    return(
        <>
        <div className="toggle-main-container">
            
            <div onClick={() => setActive(!active)} className={`${active ? "toggle-item active" : "toggle-item"}`}>
            </div>
            <div className="toggle-container">
            </div>
        </div>
        </>
    )
}
export default NewsCreateModal
