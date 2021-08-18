import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { visitCommunity } from '../../actions/communityActions'
import Calendar from '../calendar/Calendar'
import './Sidebar.css'

// import SVG images
import { ReactComponent as RagIcon } from 'url:../../../public/img/rag-icon.svg'
import { ReactComponent as CalendarIcon } from 'url:../../../public/img/calendar-icon.svg'
import { ReactComponent as Book } from 'url:../../../public/img/book.svg'
import { ReactComponent as Cap } from 'url:../../../public/img/graduation-cap-1.svg'

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
          initial: 'Me'
        },
        {
          name: 'Groups',
          slug: `/community-group/${currentCommunity && currentCommunity.slug}`,
          initial: 'Gr'
        },
        {
          name: 'Enterprises',
          slug: `/enterprises/${currentCommunity && currentCommunity.slug}`,
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
                className={`${pathname === `${navitem.slug}` ? ' text-menu text-active' : 'text-menu'}`}
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
                                <div key={item.name} className={`${pathname === `${item.slug}` ? 'text-active' : ''}`}>
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
