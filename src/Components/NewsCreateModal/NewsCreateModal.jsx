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
           {
               type === "video" && <CreateVideo getRootProps={getRootProps} getInputProps={getInputProps} files={files} videoActive={videoActive} setVideoActive={setVideoActive} />
           }
           {
               type === "image" && <CreateImage getRootProps={getRootProps} getInputProps={getInputProps} files={files} imageActive={imageActive} setImageActive={setImageActive}/>
           }
           {
               type === "text" && <CreateText getRootProps={getRootProps} getInputProps={getInputProps} files={files} textActive={textActive} setTextActive={setTextActive}/>
           }
        </>
    )
}

const CreateVideo = ({ getRootProps, getInputProps, files, videoActive, setVideoActive }) => {
    
    return (
        <>
            {videoActive &&  <div className="collection-modal-container">
                <div className="collection-modal-inner-container">
                <div className="collection-modal-header">

                <h4>Add Video</h4>
                <img src="/img/close-outline.png"  alt="close-icon" onClick={() => setVideoActive(false)}/>
                </div>
                
                     <div className="drag-drop" {...getRootProps()}>
                    <input {...getInputProps()} />
                    {files.length > 0 ? <img className="avatar" src={files[0].preview} /> : 
                    <h6 className="text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                   Drag & Drop files in this area or Click Here to attach video cover</h6>}
                    </div>
                            

                <div className="video-input-container">
                    <input className="default-input-variation" placeholder="Video title">
                        
                    </input><br />
                    <textarea className="default-input-variation text-area-variation" placeholder="Video description"></textarea> 
                    
                    <div className="video-row-3">
                        <input className="default-input-variation last-input-variation" placeholder="Video link">
                        </input> <span>OR</span> <button className="secondary-btn">Choose video</button>
                    </div>
                </div>
                <button className="default-btn btn-size">Add Video block</button>
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
                <div className="collection-modal-header">

                <h4>Add photo</h4>
                <img src="/img/close-outline.png"  alt="close-icon" onClick={() => setImageActive(false)}/>
                </div>
                
                     <div className="drag-drop" {...getRootProps()}>
                    <input {...getInputProps()} />
                    {files.length > 0 ? <img className="avatar" src={files[0].preview} /> : 
                    <h6 className="text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                   Drag & Drop files in this area or Click Here to attach</h6>}
                    </div>

                <div className="description">
                    <label>Add photo description</label> <ToggleSwitch />
                </div>

                <div className="photo-input-container">
                    <input className="default-input-variation" placeholder="Photo description">         
                    </input><br />
                </div>
                
                <button className="default-btn btn-size">Add block</button>
                </div>
            </div>}
        </>
    )
}

const CreateText = ({ getRootProps, getInputProps, files, textActive, setTextActive }) => {
    return (
        <>
               {textActive &&  <div className="collection-modal-container">
                <div className="collection-modal-inner-container">
                <div className="collection-modal-header">

                <h4>Create Collection</h4>
                <img src="/img/close-outline.png"  alt="close-icon" onClick={() => setTextActive(false)}/>
                </div>
                
                     <div className="drag-drop" {...getRootProps()}>
                    <input {...getInputProps()} />
                    {files.length > 0 ? <img className="avatar" src={files[0].preview} /> : 
                    <h6 className="text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                    Drag and Drop files in this area or Click Here to attach</h6>}
                    </div>
                            

                <div>
                    <input className="default-input-variation" placeholder="Collection title">
                        
                    </input><br />
                    <select className="default-input-variation"  placeholder="Collection title">
                        <option>Select category</option>
                        <option>Travelling</option>
                    </select>
                </div>
                <div className="add-collection"><img src="/img/plus.svg" /> <button>Create new collection</button></div>
                <button className="default-btn btn-size">Add files</button>
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
