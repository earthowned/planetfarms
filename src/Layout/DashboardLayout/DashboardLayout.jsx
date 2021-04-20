import {useState, useEffect} from 'react'
import HeaderComponent from '../../Components/Header/HeaderComponent'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./dashboard.css";

const DashboardLayout = ({title, children}) => {
    const [toggle, setToggle] = useState(true);
    
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function calculateWidth () {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize",calculateWidth);
    }
  },[calculateWidth])

    return (
        <div>
          {
              windowWidth > 1023 ? <div className="container">
            <div className={toggle ? "sidebar-container" : "sidebar-container active"}>
                <Sidebar setToggle={setToggle} toggle={toggle}/>
            </div>
            <div className="section-container">
                <HeaderComponent title={title}/>
                {children}
            </div> 
            </div> : (<>
            <div className="layout-container">
                <div className="dashboard-header">
                    <img src="/img/p-icon.svg" />
                    <img src="/img/grid-icon.svg" />
                    <img src="/img/mobile-user.svg" />
                </div>
                <h1>{title}</h1>
                <div >{children}</div>
                <div className="space-taker"></div>
            </div>
            <div className="footer-nav">
                    <img src="/img/user-green-outline.svg" />
                    <img src="/img/email-outline.svg" />
                    <img src="/img/bell-icon.svg" alt="bell icon"/>
                    <img src="/img/ham-menu.svg" alt="ham menu"/>
                </div>
                </>
            )
          } 
        </div>
    )
}

export default DashboardLayout
