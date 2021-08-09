import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { visitCommunity } from '../../actions/communityActions'
import Calendar from '../calendar/Calendar'
import './Sidebar.css'

const Sidebar = ({ setToggle, toggle, mobileView, burgerActive }) => {
  const [dropdownActive, setDropdownActive] = useState(true)
  const { currentCommunity } = useSelector(state => state.activeCommunity)
  const history = useHistory()
  const handleToggle = () => {
    setToggle(!toggle)
    setDropdownActive(!toggle)
  }
  const dispatch = useDispatch()

  const mainnav = [
    {
      name: currentCommunity ? currentCommunity.name : 'PlanetFarms',
      slug: `/community-page-news/${currentCommunity && currentCommunity.slug}`,
      image: <RagIcon />,
      dropdown: [
        {
          name: 'Members',
          slug: `/community-members/${currentCommunity && currentCommunity.slug}`,
          root: 'community-members',
          initial: 'Me'
        },
        {
          name: 'Groups',
          slug: `/community-group/${currentCommunity && currentCommunity.slug}`,
          root: 'community-group',
          initial: 'Gr'
        },
        {
          name: 'Enterprises',
          slug: `/enterprises/${currentCommunity && currentCommunity.slug}`,
          root: 'enterprises',
          initial: 'En'
        }
      ]
    },
    {
      name: 'Library',
      slug: '/library',
      image: <Book />,
      dropdown: []
    },
    {
      name: 'Courses',
      slug: '/courses',
      image: <Cap />,
      dropdown: []
    },
    {
      name: 'Calendar',
      slug: '/calendar/my-events',
      image: <CalendarIcon />,
      dropdown: []
    }
  ]

  useEffect(() => {
    const currentCommunity = localStorage.getItem('currentCommunity')
      ? JSON.parse(localStorage.getItem('currentCommunity'))
      : null

    if (!currentCommunity) dispatch(visitCommunity(3))
  }, [])
  return (
    <>
      {
      !mobileView
        ? <><button className='nav-icon' onClick={() => handleToggle()}>
          <img src='/img/sidebar-arrow-icon.svg' alt='toggle icon with arrow sign' />
        </button>
          <div className='sidebar-main-container'>
            <div className='list-nav-with-logo'>
              <div className='logo-container'>
                {toggle
                  ? <img className='logo' src='/img/logo.svg' alt='full logo' />
                  : <img className='logo-2' src='/img/p-icon.svg' alt='p-icon logo' />}
              </div>
              <MainNav navMenu={mainnav.slice(0, -1)} dropdownActive={dropdownActive} setDropdownActive={setDropdownActive} toggle={toggle} />
            </div>
            <div className='bg-calendar'><Calendar /></div>
            <div className='sm-calendar'><img
              src='/img/calendar-icon.svg'
              alt='calendar-icon'
              onClick={() => history.push('/calendar/my-events')}
                                         />
            </div>
          </div>
          </>
        : <div className={`mobile-view-dropdown-container ${burgerActive ? 'slide' : ''}`}>
          <MainNav navMenu={mainnav} dropdownActive={dropdownActive} setDropdownActive={setDropdownActive} toggle />
          </div>
    }
    </>
  )
}

export default Sidebar

function MainNav ({ dropdownActive, setDropdownActive, navMenu, toggle }) {
  const history = useHistory()
  const { pathname } = useLocation()
  const handleOnClick = () => {
    setDropdownActive(!dropdownActive)
  }

  return (
    <>
      <ul className='list-container'>
        {
        navMenu.map(navitem => {
          return (
            <li className={navitem.dropdown.length > 0 ? 'list-items' : 'list-items-menu'} key={navitem.name}>
              <div
                onClick={navitem.name === 'Ragarians'
                  ? handleOnClick
                  : navitem.name === 'Library'
                    ? () => history.push(`${navitem.slug}`)
                    : () => history.push(`${navitem.slug}`)}
                className={`${'/'.concat(pathname.split('/')[1]) === `${navitem.slug}` ? ' text-menu text-active' : 'text-menu'}`}
              >
                <div onClick={() => history.push(`${navitem.slug}`)} className='align-content'>
                  {
                    (navitem.name === 'Courses' || navitem.name === 'Calendar')
                      ? <div className='svg-icon-fill'>{navitem.image}</div>
                      : <div className='svg-icon-stroke'>{navitem.image}</div>
                  } <span>{navitem.name}</span>
                </div>
              </div>{
                  navitem.dropdown.length > 0 && <>
                    <ul className='dropdown-container'>
                      {
                            navitem.dropdown.map(item => {
                              return (
                                <div key={item.name} className={`${pathname.split('/')[1] === `${item.root}` ? 'text-active' : ''}`}>
                                  <li onClick={() => history.push(`${item.slug}`)} className='dropdown-item'>
                                    <strong>{toggle ? item.name : item.initial}</strong>
                                  </li>
                                </div>
                              )
                            })
                          }
                    </ul>
                  </>
                }
            </li>
          )
        })
      }
      </ul>
    </>
  )
}

function RagIcon () {
  return (
    <svg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg' class='icon'>
      <path d='M17 15V13.3333C17 12.4493 16.6839 11.6014 16.1213 10.9763C15.5587 10.3512 14.7956 10 14 10H8C7.20435 10 6.44129 10.3512 5.87868 10.9763C5.31607 11.6014 5 12.4493 5 13.3333V15' stroke='#2B2B2C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M11 7C12.6569 7 14 5.65685 14 4C14 2.34315 12.6569 1 11 1C9.34315 1 8 2.34315 8 4C8 5.65685 9.34315 7 11 7Z' stroke='#2B2B2C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M21 15V13.2964C20.9996 12.5415 20.8029 11.8082 20.4409 11.2115C20.0789 10.6149 19.5721 10.1887 19 10' stroke='#2B2B2C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M1 15V13.2964C1.00044 12.5415 1.1971 11.8082 1.55909 11.2115C1.92108 10.6149 2.42791 10.1887 3 10' stroke='#2B2B2C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M16 1C16.5721 1.17056 17.0792 1.55796 17.4413 2.10114C17.8034 2.64432 18 3.31238 18 4C18 4.68762 17.8034 5.35567 17.4413 5.89886C17.0792 6.44204 16.5721 6.82944 16 7' stroke='#2B2B2C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M6 1C5.42789 1.17056 4.9208 1.55796 4.55868 2.10114C4.19655 2.64432 4 3.31238 4 4C4 4.68762 4.19655 5.35567 4.55868 5.89886C4.9208 6.44204 5.42789 6.82944 6 7' stroke='#2B2B2C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  )
}

function Book () {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20' stroke='#F8EBDF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z' stroke='#F8EBDF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  )
}

function Cap () {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M12.0448 20.1818H12.0444H12.0448ZM11.9552 20.1818H11.9554H11.9552ZM12.0379 20.1818C12.0377 20.1818 12.0373 20.1818 12.0369 20.1818H12.0379ZM11.9623 20.1818H11.9631C11.9627 20.1818 11.9625 20.1818 11.9623 20.1818ZM11.9773 20.1818H11.9786C11.9784 20.1818 11.9777 20.1818 11.9773 20.1818ZM12.0227 20.1818C12.0225 20.1818 12.0219 20.1818 12.0216 20.1818H12.0227ZM11.9839 20.1818H11.9863C11.9856 20.1818 11.9846 20.1818 11.9839 20.1818ZM12.0161 20.1818C12.0154 20.1818 12.0144 20.1818 12.0137 20.1818H12.0161ZM11.9912 20.1818H11.9931C11.9925 20.1818 11.9919 20.1818 11.9912 20.1818ZM12.0088 20.1818C12.0081 20.1818 12.0075 20.1818 12.0069 20.1818H12.0088ZM12 3C11.8603 3 11.7204 3.03252 11.5937 3.09777L0.450857 8.82511C0.173357 8.96768 0 9.24443 0 9.54532C0 9.84621 0.173357 10.123 0.450857 10.2655L3.42857 11.7962V17.7272C3.42857 17.9443 3.519 18.1523 3.67971 18.3057C3.79479 18.4159 6.56464 21 12 21C17.4354 21 20.2052 18.4159 20.3203 18.3057C20.481 18.1523 20.5714 17.9443 20.5714 17.7272V11.7962L22.2857 10.915V14.4545C22.2857 14.9063 22.6695 15.2727 23.1429 15.2727C23.6162 15.2727 24 14.9063 24 14.4545V9.54532C24 9.24443 23.8266 8.96768 23.5491 8.82511L12.4063 3.09777C12.2796 3.03252 12.1397 3 12 3ZM12 14.3434L2.66507 9.54532L12 4.74725L21.3347 9.54532L12 14.3434ZM12 16.0909C12.1397 16.0909 12.2796 16.0581 12.4063 15.9929L18.8571 12.6774V17.3517C18.1264 17.9019 15.8233 19.3636 12 19.3636C8.17393 19.3636 5.87036 17.8995 5.14286 17.3521V12.6774L11.5937 15.9929C11.7204 16.0581 11.8603 16.0909 12 16.0909Z' fill='#00C688' />
    </svg>
  )
}

function CalendarIcon () {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M18 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H6C5.20435 4 4.44129 4.31607 3.87868 4.87868C3.31607 5.44129 3 6.20435 3 7V19C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H18C18.7956 22 19.5587 21.6839 20.1213 21.1213C20.6839 20.5587 21 19.7956 21 19V7C21 6.20435 20.6839 5.44129 20.1213 4.87868C19.5587 4.31607 18.7956 4 18 4ZM6 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H18C18.2652 6 18.5196 6.10536 18.7071 6.29289C18.8946 6.48043 19 6.73478 19 7V11H5V7C5 6.73478 5.10536 6.48043 5.29289 6.29289C5.48043 6.10536 5.73478 6 6 6ZM18 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V13H19V19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20Z' fill='#00C688' />
      <path d='M8 17C8.55228 17 9 16.5523 9 16C9 15.4477 8.55228 15 8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17Z' fill='#00C688' />
      <path d='M16 15H12C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17H16C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16C17 15.7348 16.8946 15.4804 16.7071 15.2929C16.5196 15.1054 16.2652 15 16 15Z' fill='#00C688' />
    </svg>
  )
}
