import React from 'react'
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'
import './news-add.css'

const NewsAdd = () => {
    return (
        <>
           <DashboardLayout title="Add News">
            {/* back button comes here */}
            <div className="news-add-container">
                <h4>How to be rich in 2020 and make business?</h4>
                <div className="news-add-inner-container">
                    <button className="add-btn"><img src="/img/video-outline.svg" /> <span>Add video</span></button>
                    <button className="add-btn"><img src="/img/camera-outline.svg" /> <span>Add image</span></button>
                    <button className="add-btn"><img src="/img/file-text-outline.svg" /><span>Add text</span></button>
                </div>
            </div>
            </DashboardLayout>
        </>
    )
}

export default NewsAdd
