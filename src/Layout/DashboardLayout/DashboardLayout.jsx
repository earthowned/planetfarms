import {useState} from 'react'
import HeaderComponent from '../../Components/Header/HeaderComponent'
import Sidebar from '../../Components/Sidebar/Sidebar'

const DashboardLayout = ({title, children}) => {
    const [toggle, setToggle] = useState(true);
    return (
        <div>
           <div className="container">
            <div className={toggle ? "sidebar-container" : "sidebar-container active"}>
                <Sidebar setToggle={setToggle} toggle={toggle}/>
            </div>
            <div className="section-container">
                <HeaderComponent title={title}/>
                {children}
            </div> 
            </div>
            </div>
    )
}

export default DashboardLayout
