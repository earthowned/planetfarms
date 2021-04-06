import React from 'react'
import LibraryCard from '../../../Components/LibraryCard/LibraryCard';
import LibraryHeader from '../../../Components/LibraryHeader/LibraryHeader'
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'
import './saved-collection.css'

const library = [
    {
        category: "farming",
        title: "Business collection",
        img: "/img/man-cap.svg"
    },
    {
        category: "farming",
        title: "Business collection for beginners",
        img: "/img/man-cap.svg"
    },
]

const collections = [
    {
        category: 'farming',
        title: "Business collection for beginners",
        img: "/img/man-cap.svg"
    }
]
const SavedCollection = () => {
    return (
        <>
             <DashboardLayout title="library">
                  <div className="library-main-container">
                    <LibraryHeader />
                  </div>  
                  <div className="library-collection">
                      <h4>Farming Collections</h4>
                      <LibraryCard data={library}/>
                  </div>
                   <div className="library-collection">
                       <h4>Branding Collections</h4>
                      <LibraryCard data={collections}/>
                  </div>
            </DashboardLayout>
        </>
    )
}

export default SavedCollection
