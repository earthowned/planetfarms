import React from 'react'
import LibraryHeader from '../../Components/LibraryHeader/LibraryHeader'
import './library.css'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import ListView from '../../Components/ListView/ListView';

const articles = [
    {
        title: "How to make business in 2020",
        category: "Business",
        img: "./img/mountain.svg",
    },
    {
        title: "How to be productive in this year and find yourslef",
        category: "Business",
        img: "./img/lake.svg",
    },
    {
        title: "How to make business in 2021",
        category: "Business",
        img: "./img/lake.svg",
    },
]

const videos = [
    {
        title: "How to be productive in this year and find yourslef",
        category: "Business",
        img: "./img/man.svg",
    },
    {
        title: "How to make business in 2021",
        category: "Business",
        img: "./img/sky.svg",
    },
    {
        title: "How to make business in 2021",
        category: "Business",
        img: "./img/mountain.svg",
    },
]

const Library = () => {
    return (
        <DashboardLayout title="library">
           <div className="library-main-container">
           <LibraryHeader />
           <div className="list-container">
           <ListView title="Articles" data={articles} />
           </div>

           <div className="list-container">
           <ListView title="Videos" data={videos} />
            </div>
            </div>
         </DashboardLayout>
    )
}

export default Library
