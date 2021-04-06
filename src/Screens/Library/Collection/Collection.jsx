import React from 'react'
import LibraryCard from '../../../Components/LibraryCard/LibraryCard';
import LibraryHeader from '../../../Components/LibraryHeader/LibraryHeader';
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout';
import './collection.css';

const library = [
    {
        category: "farming",
        title: "How to farm in 2020 and don't lose you business",
        img: "/img/man-cap.svg"
    },
    {
        category: "farming",
        title: "How to farm in 2020 and don't lose you business",
        img: "/img/man-cap.svg"
    },
    {
        category: "farming",
        title: "How to farm in 2020 and don't lose you business",
        img: "/img/man-cap.svg"
    },
]

const collections = [
    {
        category: 'farming',
        title: "Business collection",
        img: "/img/man-cap.svg"
    }
]
const Collection = () => {
    return (
        <>
            <DashboardLayout title="library">
                  <div className="library-main-container">
                    <LibraryHeader />
                  </div>  
                  <div className="library-collection">
                      <h4>My library (files)</h4>
                      <LibraryCard data={library}/>
                  </div>
                   <div className="library-collection">
                       <h4>My Collections</h4>
                      <LibraryCard data={collections}/>
                  </div>
            </DashboardLayout>
        </>
    )
}

export default Collection
