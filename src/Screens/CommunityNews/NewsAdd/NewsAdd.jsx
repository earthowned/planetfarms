import {useState} from 'react'
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

    return (
        <>
        {createVideoModal && <NewsCreateModal type="video" videoActive={videoActive} setVideoActive={setVideoActive}/>}
        {createImageModal && <NewsCreateModal type="image" imageActive={imageActive} setImageActive={setImageActive} />}
        {createTextModal && <NewsCreateModal type="text" textActive={textActive} setTextActive={setTextActive}/>}
           <DashboardLayout title="Add News">
            {/* back button comes here */}
            <NewsAddMainContainer setCreateVideoModal={setCreateVideoModal} setCreateImageModal={setCreateImageModal}
            setCreateTextModal={setCreateTextModal} setTextActive={setTextActive} setImageActive={setImageActive} setVideoActive={setVideoActive}/>
            </DashboardLayout>
        </>
    )
}

function NewsAddMainContainer ({setCreateVideoModal, setCreateImageModal, setCreateTextModal, setVideoActive, setImageActive, setTextActive}) {

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
            <NewsAddContainer createVideo={createVideo} createImage={createImage} createText={createText}/>  
            <PopUp />
         </div>
    )
}

function NewsAddContainer ({createVideo, createImage, createText}) {
    const {id} = useParams();
    console.log(id);
    return(
         <div className="news-add-container">
             <h4>{id}</h4>
                <div className="news-add-inner-container">
                    <button onClick={() => createVideo()} className="add-btn"><img src="/img/video-outline.svg" /> <span>Add video</span></button>
                    <button onClick={() => createImage()} className="add-btn"><img src="/img/camera-outline.svg" /> <span>Add image</span></button>
                    <button onClick={() => createText()} className="add-btn"><img src="/img/file-text-outline.svg" /><span>Add text</span></button>
                </div>
        </div>
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
