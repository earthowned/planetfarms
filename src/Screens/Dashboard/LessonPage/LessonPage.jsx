import React from 'react'
import BackButton from '../../../Components/BackButton/BackButton'
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'
import Button from '../../../Components/Button/Button';

import "./lesson-page.css";

const LessonPage = () => {
    return (
        <DashboardLayout title="Course page">
            <BackButton location={"/mycoursepage"} />
            <LessonDetail />
            <MaterialComponent />
        </DashboardLayout>
    )
}

const LessonDetail = () => {
    return (
        <div className="lesson-description-wrapper">
            <h3>Lesson 1. Introducing</h3>
            <div className="lesson-description-img-wrapper">
                <img src="/img/farm.svg" alt="green field with houses" />
            </div>
            <div className="lesson-description-content">
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="lesson-description-content">
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="lesson-description-video">
                <img src="/img/man-cap.svg" width="100%" alt="lesson-video"/>
            </div>
            <div className="lesson-test-panel">
                <div className="lesson-test-panel-left">
                    <h4>Lesson test</h4>
                    <p>Make a lesson test where you can use new information that you know</p>
                    <Button name="Start text" />
                </div>
                <div className="lesson-test-panel-right">
                    <h4>My results</h4>
                    <div className="lesson-test-panel-right--attempts">
                        <h4>You didn't finish test yet.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

const document = [
        {
            name: "Finance document.pdf",
            img: "/img/pdf.svg"
        },
        {
            name: "Finance document.pdf",
            img: "/img/pdf.svg"
        },
        {
            name: "Finance document.pdf",
            img: "/img/pdf.svg"
        },
        {
            name: "Finance document.pdf",
            img: "/img/pdf.svg"
        },
        {
            name: "Finance document.pdf",
            img: "/img/pdf.svg"
        },
        {
            name: "Finance document.pdf",
            img: "/img/pdf.svg"
        },
    ]

const MaterialComponent = () => {
    return (
    <div className="material-wrapper">
        <div className="material-header">
            <h4>Materials</h4>
            <div className="">
                <img src="/img/download-icon.svg" alt="download icon" />
                <h4>Donwload all files</h4>
            </div>
            <div className="document-wrapper">
                {
                    document.map(item => {
                        return (<Document item={item}/>)
                    })
                }
            </div>
        </div>
    </div>
    )
}

const Document = ({item}) => {
    return(
        <div className="document">
            <img src={item.img} alt="document type" />
            <h4>item.name</h4>
            <img src="/img/edit-icon.svg" alt="edit icon"/>
        </div>
    )
}

export default LessonPage
