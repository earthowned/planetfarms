import {useEffect, useState} from 'react'
import "./news-create-modal.css";
import {useDropzone} from 'react-dropzone';
import { Link } from 'react-router-dom';

const NewsCreateModal = ({type, videoActive, setVideoActive, imageActive, setImageActive, textActive, setTextActive,groupActive,setGroupActive,groupEditActive,setGroupEditActive }) => {
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
           { type === "group" && <CreateGroup getRootProps={getRootProps} getInputProps={getInputProps} files={files} groupActive={groupActive} setGroupActive={setGroupActive} />}
           { type === "edit-group" && <EditGroup getRootProps={getRootProps} getInputProps={getInputProps} files={files} groupEditActive={groupEditActive} setGroupEditActive={setGroupEditActive} />}
           {type === "image" && <CreateImage getRootProps={getRootProps} getInputProps={getInputProps} files={files} imageActive={imageActive} setImageActive={setImageActive}/>}
           {type === "text" && <CreateText getRootProps={getRootProps} getInputProps={getInputProps} files={files} textActive={textActive} setTextActive={setTextActive}/>}
        </>
    )
}

const CreateVideo = ({ getRootProps, getInputProps, files, videoActive, setVideoActive, setContent, content }) => {
    
    function createVideo() {
        setContent({
            ...content,
            image: files[0].preview
        })

        setVideoActive(false);
    }

    return (
        <>
            {videoActive &&  <div className="collection-modal-container">
                <div className="collection-modal-inner-container">
                <CollectionModalHeader title="Add video" setVideoActive={setVideoActive}/>
                 <DragDrop getInputProps={getInputProps} getRootProps={getRootProps} files={files} />
                <VideoInputContainer setContent={setContent} content={content}/>
                <Button name="Add Video block" createVideo={createVideo} />
                </div>
            </div>}
        </>
    )
}
const CreateGroup = ({ getRootProps, getInputProps, files, groupActive, setGroupActive }) => {
    return (
        <>
            {groupActive &&  <div className="collection-modal-container">
                <div className="collection-modal-inner-container">
                <CollectionModalHeader title="Create Group" setGroupActive={setGroupActive}/>
                 <DragDrop getInputProps={getInputProps} getRootProps={getRootProps} files={files} />
                <GroupInputContainer />
                <Link to="/my-group-view-page">
                    <Button name="Create Group" />
                </Link>
                
                </div>
            </div>}
        </>
    )
}
const EditGroup = ({ getRootProps, getInputProps, files, groupEditActive, setGroupEditActive }) => {
    return (
        <>
            {groupEditActive &&  <div className="collection-modal-container">
                <div className="collection-modal-inner-container">
                <CollectionModalHeader title="Edit Group" setGroupEditActive={setGroupEditActive}/>
                 <DragDrop getInputProps={getInputProps} getRootProps={getRootProps} files={files} />
                <GroupEditContainer />
                <button className="button-delete" ><img className="trash-icon" src="/img/trash-icon.svg" /> Delete Groups</button>
                <div>
                     <Link to="/my-group-view-page">
                    <Button name="Edit Group" />   
                </Link>
                <button className="button-cancel" onClick={()=>setGroupEditActive(false)} >Cancel</button>
                </div>
               
              
                
                </div>
            </div>}
        </>
    )
}

const CreateImage = ({ getRootProps, getInputProps, files, imageActive, setImageActive, content, setContent }) => {

    function createImage (){
        setContent({
            ...content,
            image: files[0].preview
        })
        setImageActive(false);
    }

    return (
        <>
              {imageActive &&  <div className="collection-modal-container">
                <div className="collection-modal-inner-container">
                    <CollectionModalHeader title="Add photo" setImageActive={setImageActive} />
                
                <DragDrop getInputProps={getInputProps} getRootProps={getRootProps} files={files} />
                     
                <PhotoInput />
                <Button name="Add Image block" createImage={createImage} />                
                </div>
            </div>}
        </>
    )
}


const CreateText = ({ textActive, setTextActive, setContent, content }) => {
     const[textTitle, setTextTitle] = useState('');
    const[textDesc, setTextDesc] = useState('');

    function createText() {
        setContent({
            ...content,
            textTitle,
            textDesc,
        })
        setTextActive(false);
    }

    return (
        <>
               {textActive &&  <div className="collection-modal-container">
                <div className="collection-modal-inner-container">
                    <CollectionModalHeader title="Add text" setTextActive={setTextActive}/>
                    <TextInputContainer setTextDesc={setTextDesc} textDesc={textDesc} textTitle={textTitle} setTextTitle={setTextTitle}/>
                    <Button name="Add Text block" createText={createText}/>
                </div>
            </div>}
        </>
    )
}

function TextInputContainer ({textTitle, setTextTitle, textDesc, setTextDesc}) {
  
    return (
          <div className="photo-input-container">
            <input className="default-input-variation" placeholder="Collection title" 
            value={textTitle} onChange={(e) => setTextTitle(e.target.value)}>
            </input><br />
             <textarea className="default-input-variation text-area-variation-2" placeholder="Type text here ">
            </textarea>
        </div>
    )
}

const DragDrop = ({getInputProps, getRootProps, files}) => {
return(
     <div className="drag-drop" {...getRootProps()}>
                    <input {...getInputProps()} />
                    {files.length > 0 ? <img className="preview-image" src={files[0].preview} /> : 
                    <h6 className="text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                   Drag & Drop files in this area or Click Here to attach video cover</h6>}
    </div>          
)
}

const CollectionModalHeader = ({title,setVideoActive, setImageActive, setTextActive,setGroupActive,setGroupEditActive}) => {
    return(
        <>
        {
            title === "Add video" ? (<div className="collection-modal-header">
                <h4>{title}</h4>
                <img src="/img/close-outline.png"  alt="close-icon" onClick={() => setVideoActive(false)}/>
        </div>):title==="Create Group" ? (<div className="collection-modal-header">
            <h4>{title}</h4>
            <img src="/img/close-outline.svg" alt="close-icon" onClick={()=>setGroupActive(false)} />
        </div>):title==="Edit Group" ? (<div className="collection-modal-header">
            <h4>{title}</h4>
            <img src="/img/close-outline.svg" alt="close-icon" onClick={()=>setGroupEditActive(false)}/>
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

const VideoInputContainer = ({setContent, content}) => {
    const [videoTitle, setVideoTitle] = useState();
    const [videoDesc, setVideoDesc] = useState();

    useEffect(() => {
          setContent({
            ...content,
            videoTitle,
            videoDesc,
        })
    }, [setVideoTitle, setVideoDesc])

    return(
        <div className="video-input-container">
                    <input className="default-input-variation" 
                    placeholder="Video title" 
                    value={videoTitle} 
                    onChange={(e) => setVideoTitle(e.target.value)}>
                    </input><br />
                    <textarea className="default-input-variation text-area-variation" placeholder="Video description"  cols="3" rows="3"></textarea> 
                    
                    <div className="video-row-3">
                        <input className="default-input-variation last-input-variation" placeholder="Video link">
                     </input> <span>OR</span> <button className="secondary-btn">Choose video</button>
                    </div>
    </div>
    )
}
const GroupInputContainer = () => {
    return(
        <div className="video-input-container">
                    <input className="default-input-variation" placeholder="Group title" required="true">
                        
                    </input><br />
                    <textarea className="default-input-variation text-area-variation" placeholder="Group description" required ="true"  cols="3" rows="3"></textarea> 
                   
    </div>
    )
}
const GroupEditContainer = () => {
    return(
        <div className="video-input-container">
                    <input className="default-input-variation" placeholder="Edit Title" required="true" value="Think like a farmer">
                        
                    </input><br />
                    <textarea className="default-input-variation text-area-variation" placeholder="Edit description" required ="true"  cols="3" rows="3" value="Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!" ></textarea> 
                   
    </div>
    )
}

const Button = ({name, createVideo, createText, createImage}) => {
    return (
        <>
        {name == "Add Video block" && <button className="default-btn btn-size" onClick={() => createVideo()}>{name}</button>}
        {name == "Add Text block" && <button className="default-btn btn-size" onClick={() => createText()}>{name}</button>}
        {name == "Add Image block" && <button className="default-btn btn-size" onClick={() => createImage()}>{name}</button>}
        </>
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
