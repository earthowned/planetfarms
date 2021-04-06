import {useState} from 'react'
import './user-collection.css'

import LibraryHeader from '../../../Components/LibraryHeader/LibraryHeader'
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'

const farming = [
    {
        category: "farming",
        title: "Business collection",
        users: 365,
        img: "/img/farming.svg"
    },
    {
        category: "farming",
        title: "Business collection",
        users: 365,
        img: "/img/farming.svg"
    },
    {
        category: "farming",
        title: "Business collection",
        users: 365,
        img: "/img/farming.svg"
    },
    {
        category: "farming",
        title: "Business collection",
        users: 365,
        img: "/img/farming.svg"
    },
    {
        category: "farming",
        title: "Business collection",
        users: 365,
        img: "/img/farming.svg"
    },
    {
        category: "farming",
        title: "Business collection",
        users: 365,
        img: "/img/farming.svg"
    },
]
const UserCollection = () => {

    const [active, setActive] = useState(false);

    return (
        <>
         <DashboardLayout title="library">
                  <div className="library-main-container">
                    <LibraryHeader />
                  </div>  

                  <h4 className="farming-collection-header">Farming Collections</h4>
            <div className="farming-main-container">
                
            {
                farming.map(item => {
                    return (
                        <div className="farming-inner-container" style={{backgroundImage: `url(${item.img})`}}>
                            <button className="trasnsparent-btn btn-positioning">
                              <b>{item.users}</b>  <span>users saved</span>
                            </button>

                            <div className="libraryCard-content">
                            <h6>{item.category}</h6>
                            <h4>{item.title}</h4>
                            
                            <button className="trasnsparent-btn fixed-width" onClick={() => setActive(!active)}>
                              {active ? <><img src="/img/check-circle.svg" alt="circle-icon" /> <span>Saved</span></>: "Save Collection"}
                            </button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </DashboardLayout>
        </>
    )
}

export default UserCollection
