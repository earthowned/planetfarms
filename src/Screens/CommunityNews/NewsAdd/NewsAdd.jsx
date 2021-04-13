import {useEffect, useState} from 'react'
import NewsCreateModal from '../../../Components/NewsCreateModal/NewsCreateModal';
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'
import {useParams} from 'react-router-dom';

import './news-add.css'

const NewsAdd = () => {
    const [createVideoModal, setCreateVideoModal] = useState(false);
    const [createImageModal, setCreateImageModal] = useState(false);
    const [createTextModal, setCreateTextModal] = useState(false);
     const [videoActive, setVideoActive] = useState(true);
    const [imageActive, setImageActive] = useState(true);
    const [textActive, setTextActive] = useState(true);
    const [content, setContent] = useState({
        title: ""
    })
    const {id} = useParams();

    useEffect(() => {
        setContent({
        title: id,
        image: "",
        videoTitle: "",
        videoDesc: "",
        textTitle: "",
        textDesc: "",
    })
    }, [])
    
    return (
        <>
        {createVideoModal && <NewsCreateModal setContent={setContent} content={content} type="video" videoActive={videoActive} setVideoActive={setVideoActive}/>}
        {createImageModal && <NewsCreateModal setContent={setContent} type="image" imageActive={imageActive} setImageActive={setImageActive} />}
        {createTextModal && <NewsCreateModal setContent={setContent} type="text" textActive={textActive} setTextActive={setTextActive}/>}
           <DashboardLayout title="Add News">
            {/* back button comes here */}
            <NewsAddMainContainer setCreateVideoModal={setCreateVideoModal} setCreateImageModal={setCreateImageModal}
            setCreateTextModal={setCreateTextModal} setTextActive={setTextActive} setImageActive={setImageActive} setVideoActive={setVideoActive}
            content={content}
            />
            </DashboardLayout>
        </>
    )
}

function NewsAddMainContainer ({setCreateVideoModal, setCreateImageModal, setCreateTextModal, setVideoActive, setImageActive, setTextActive, content}) {

    function createVideo () {
        setCreateVideoModal(true);
        setCreateImageModal(false);
        setCreateTextModal(false);
        setVideoActive(true);
    }

    function createImage () {
        setCreateVideoModal(false);
        setCreateImageModal(true);
        setCreateTextModal(false);
        setImageActive(true);
    }

    function createText () {
        setCreateVideoModal(false);
        setCreateImageModal(false);
        setCreateTextModal(true);
        setTextActive(true);
    }

    
    return(
        <div className="news-add-main-container">
            <NewsAddContainer content={content} createVideo={createVideo} createImage={createImage} createText={createText}/>  
            <PopUp />
         </div>
    )
}

function NewsAddContainer ({createVideo, createImage, createText, content}) {
    return(
         <div className="news-add-container">
             <NewContent content={content} />
             <div className="news-add-inner-container">
                    <button onClick={() => createVideo()} className="add-btn" ><img src="/img/video-outline.svg" /> <span>Add video</span></button>
                    <button onClick={() => createImage()} className="add-btn"><img src="/img/camera-outline.svg" /> <span>Add image</span></button>
                    <button onClick={() => createText()} className="add-btn"><img src="/img/file-text-outline.svg" /><span>Add text</span></button>
                </div>
        </div>
    )
}

function NewContent({content}) {
    return (
        <>
        <div className="new-content-container">
            <h2>{content.title}</h2>
            {content.image && <img src={content.image} alt="new-image" />}
            {content.videoTitle && <h6>{content.videoTitle}</h6>}
            {content.textTitle && <h4>{content.textTitle}</h4>}
            {content.textDesc && <p>{content.textDesc}</p>}
        </div>
        </>
    )
}

function PopUp () {
    const [activePopup, setActivePopup] = useState(true);
    return(
        <>
        {activePopup && (<div className="popup-box">
            <h4>Do you want to save edits?</h4>
            <div className="popup-btn-wrapper">
                <button onClick={() => setActivePopup(false)} className="secondary-btn">Cancel</button>
                <button onClick={() => setActivePopup(false)} className="default-btn">Save Edits</button>
            </div>
        </div>)}
        </>
    )
}

export default NewsAdd
