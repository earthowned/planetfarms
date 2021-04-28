import {useState, useEffect} from 'react'
import HeaderComponent from '../../Components/Header/HeaderComponent'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./dashboard.css";

import {Link, useLocation} from 'react-router-dom';
import MessageDropdown from '../../Components/MessageDropdown/MessageDropdown';
import {TABLET_SIZE} from '../../constants/sizeConstants'

// importing custom hooks sizefinder to calculate window width from utils
import useSizeFinder from '../../utils/SizeFinder';

const DashboardLayout = ({title, children}) => {
    const [toggle, setToggle] = useState(true);
    const [sidebar, setSidebar] = useState(false);

    const [burgerActive, setBurgerActive] = useState(false);
    const [notificationActive, setNotificationActive] = useState(false);
    const [messageActive, setMessageActive] = useState(false);
    const [userActive, setUserActive] = useState(false);

  const {pathname} = useLocation();

  useEffect(() => {
    if(pathname === '/dashboard') setUserActive(true)
    if(pathname === '/messenger') setMessageActive(true)
  }, [setMessageActive, setUserActive])

  // using custom function
  let windowWidth = useSizeFinder();

  //mobile button functionality
  function activeBurger () {
    setSidebar(!sidebar)
    setBurgerActive(!burgerActive)

    //making the notification off
    setNotificationActive(false)
    
    //making the user off
    setUserActive(false)

    //making the message off
    setMessageActive(false)
  }

  function activeNotification () {
    setNotificationActive(!notificationActive)

    //making the sidebar off
    setSidebar(false)
    setBurgerActive(false)

    //making the user off
    setUserActive(false)

    //making the message off
    setMessageActive(false)

  }

  function activeMessage () {
    setMessageActive(!messageActive)

    //making the sidebar off
    setSidebar(false)
    setBurgerActive(false)

    //making the notification off
    setNotificationActive(false)

    //making the user off
    setUserActive(false)
  }

  function activeUser () {
    setUserActive(!userActive)

    //making the sidebar off
    setSidebar(false)
    setBurgerActive(false)

    //making the notification off
    setNotificationActive(false)

    //making the message off
    setMessageActive(false)

  }

    return (
        <div>
          {
              windowWidth > TABLET_SIZE ? <div className="container">
            <div className={toggle ? "sidebar-container" : "sidebar-container active"}>
                <Sidebar setToggle={setToggle} toggle={toggle}/>
            </div>
            <div className="section-container">
                <HeaderComponent title={title}/>
                {children}
            </div> 
            </div> : (<>
            <MessageDropdown mobileView="mobileView" btnName="see more" 
            clickHandler={setMessageActive} messageActive={messageActive}
            message="Your Messages" />
            <MessageDropdown mobileView="mobileView" btnName="see more" 
            clickHandler={setNotificationActive} 
            message="Your Notifications" notificationActive={notificationActive}/>
            <Sidebar mobileView="mobileView" burgerActive={burgerActive}/>
            <div className="layout-container">
                <div className="dashboard-header">
                    <img src="/img/p-icon.svg" alt="p-icon" />
                    <img src="/img/grid-icon.svg" alt="grid-icon" />
                    <img src="/img/mobile-user.svg" alt="user-icon" />
                </div>
                <h1>{title}</h1>
                <div >{children}</div>
                <div className="space-taker"></div>
            </div>
  
            <div className="footer-nav">
              <div className={`mobile-tab-wrapper ${userActive && "active"} `}>
                <Link to="/dashboard"><UserMenu activeUser={activeUser} /></Link>
              </div>

              <div className={`mobile-tab-wrapper ${messageActive && "active"}`}>
                <MessageMenu activeMessage={activeMessage}/>
              </div>
                    
              <div className={`mobile-tab-wrapper ${notificationActive && "active"}`}> 
                <NotificationMenu activeNotification={activeNotification} />
              </div>
                    
              <div className={`mobile-tab-wrapper ${burgerActive && "active"}`}>
                <Hamburger activeBurger={activeBurger} />
              </div>
            </div>
            </>
            )
          } 
        </div>
    )
}

function Hamburger ({activeBurger}) {
return (
   <svg onClick={() => activeBurger()} className="mobile-tab" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="#00C688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 6H21" stroke="#00C688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 18H21" stroke="#00C688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>
)
}

function NotificationMenu ({activeNotification}) {
  return(
          <svg onClick={() => activeNotification()} className="mobile-tab" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.52 15.2099L18.72 13.3999V8.93989C18.744 7.28372 18.1679 5.6748 17.0981 4.41023C16.0284 3.14566 14.5372 2.31083 12.9 2.05989C11.9498 1.93476 10.9839 2.01371 10.0666 2.29147C9.14936 2.56923 8.30188 3.03942 7.58074 3.67066C6.85959 4.30189 6.28136 5.07967 5.88462 5.95209C5.48788 6.82451 5.28176 7.7715 5.28001 8.72989V13.3999L3.48001 15.2099C3.25392 15.4398 3.1006 15.7312 3.03921 16.0477C2.97783 16.3642 3.01111 16.6918 3.13489 16.9895C3.25867 17.2872 3.46746 17.5419 3.73516 17.7216C4.00286 17.9013 4.31759 17.9981 4.64001 17.9999H8.00001V18.3399C8.04672 19.3551 8.49396 20.3104 9.24374 20.9964C9.99351 21.6825 10.9847 22.0433 12 21.9999C13.0154 22.0433 14.0065 21.6825 14.7563 20.9964C15.5061 20.3104 15.9533 19.3551 16 18.3399V17.9999H19.36C19.6824 17.9981 19.9972 17.9013 20.2649 17.7216C20.5326 17.5419 20.7414 17.2872 20.8651 16.9895C20.9889 16.6918 21.0222 16.3642 20.9608 16.0477C20.8994 15.7312 20.7461 15.4398 20.52 15.2099ZM14 18.3399C13.9446 18.8209 13.7057 19.262 13.3331 19.5712C12.9605 19.8804 12.483 20.034 12 19.9999C11.517 20.034 11.0395 19.8804 10.6669 19.5712C10.2944 19.262 10.0555 18.8209 10 18.3399V17.9999H14V18.3399ZM5.51001 15.9999L6.69001 14.8199C6.87718 14.6338 7.02567 14.4126 7.12694 14.1689C7.2282 13.9251 7.28022 13.6638 7.28001 13.3999V8.72989C7.28056 8.05529 7.4254 7.38862 7.70481 6.7746C7.98422 6.16059 8.39174 5.61345 8.90001 5.16989C9.40143 4.71558 9.99559 4.37564 10.6414 4.17363C11.2871 3.97161 11.9691 3.91233 12.64 3.99989C13.7965 4.18767 14.8462 4.78691 15.5959 5.68727C16.3456 6.58764 16.7448 7.72853 16.72 8.89989V13.3999C16.7185 13.6631 16.7689 13.924 16.8685 14.1677C16.968 14.4114 17.1146 14.633 17.3 14.8199L18.49 15.9999H5.51001Z" fill="#00C688"/>
          </svg>
  )
}

function MessageMenu ({activeMessage}) {
  return(
      <svg onClick={() => activeMessage()} className="mobile-tab" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.33 6L12 10.75L5.67 6H18.33ZM19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.25L11.4 12.8C11.5731 12.9298 11.7836 13 12 13C12.2164 13 12.4269 12.9298 12.6 12.8L20 7.25V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18Z" fill="#00C688"/>
      </svg>
  )
}

function UserMenu({activeUser}) {
  return(
          <svg onClick={() => activeUser()} className="mobile-tab" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 11C12.7911 11 13.5645 10.7654 14.2223 10.3259C14.8801 9.88635 15.3928 9.26164 15.6955 8.53074C15.9983 7.79983 16.0775 6.99556 15.9231 6.21964C15.7688 5.44372 15.3878 4.73098 14.8284 4.17157C14.269 3.61216 13.5563 3.2312 12.7804 3.07686C12.0044 2.92252 11.2002 3.00173 10.4693 3.30448C9.73836 3.60723 9.11365 4.11992 8.67412 4.77772C8.2346 5.43552 8 6.20888 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11ZM12 5C12.3956 5 12.7822 5.1173 13.1111 5.33706C13.44 5.55683 13.6964 5.86918 13.8478 6.23463C13.9991 6.60009 14.0387 7.00222 13.9616 7.39018C13.8844 7.77814 13.6939 8.13451 13.4142 8.41422C13.1345 8.69392 12.7781 8.8844 12.3902 8.96157C12.0022 9.03874 11.6001 8.99914 11.2346 8.84776C10.8692 8.69639 10.5568 8.44004 10.3371 8.11114C10.1173 7.78224 10 7.39556 10 7C10 6.46957 10.2107 5.96086 10.5858 5.58579C10.9609 5.21072 11.4696 5 12 5Z" fill="#00C688"/>
            <path d="M12 13C10.1435 13 8.36301 13.7375 7.05025 15.0503C5.7375 16.363 5 18.1435 5 20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21C6.26522 21 6.51957 20.8946 6.70711 20.7071C6.89464 20.5196 7 20.2652 7 20C7 18.6739 7.52678 17.4021 8.46447 16.4645C9.40215 15.5268 10.6739 15 12 15C13.3261 15 14.5979 15.5268 15.5355 16.4645C16.4732 17.4021 17 18.6739 17 20C17 20.2652 17.1054 20.5196 17.2929 20.7071C17.4804 20.8946 17.7348 21 18 21C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20C19 18.1435 18.2625 16.363 16.9497 15.0503C15.637 13.7375 13.8565 13 12 13Z" fill="#00C688"/>
          </svg>  
  )
}

export default DashboardLayout
