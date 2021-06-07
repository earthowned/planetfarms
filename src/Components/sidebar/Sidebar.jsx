import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Calendar from '../calendar/Calendar'
import './Sidebar.css'

const mainnav = [
  {
    name: 'Ragarians',
    slug: '/community-page-news',
    image: '/img/rag-icon.svg',
    dropdown: [
      {
        name: 'Members',
        slug: '/community-members'
      },
      {
        name: 'Groups',
        slug: '/community-group'
      },
      {
        name: 'Enterprises',
        slug: '/enterprises'
      }
    ]
  },
  {
    name: 'Library',
    slug: '/library',
    image: '/img/book.svg',
    dropdown: []
  },
  {
    name: 'Courses',
    slug: '/courses',
    image: '/img/graduation-cap-1.svg',
    dropdown: []
  },
  {
    name: 'Calendar',
    slug: '/calendar/my-events',
    image: '/img/calendar-icon.svg',
    dropdown: []
  }
]

const Sidebar = ({ setToggle, toggle, mobileView, burgerActive }) => {
  const [dropdownActive, setDropdownActive] = useState(true)
  const history = useHistory()
  const handleToggle = () => {
    setToggle(!toggle)
    setDropdownActive(!toggle)
  }

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
              <MainNav navMenu={mainnav.slice(0, -1)} dropdownActive={dropdownActive} setDropdownActive={setDropdownActive} />
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
        : <div className={`mobile-view-dropdown-container ${burgerActive && 'slide'}`}>
          <MainNav navMenu={mainnav} dropdownActive={dropdownActive} setDropdownActive={setDropdownActive} />
          </div>
    }
    </>
  )
}

export default Sidebar

function MainNav ({ dropdownActive, setDropdownActive, navMenu }) {
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
                  <img src={navitem.image} alt='navigation' /> <span>{navitem.name}</span>
                </div>
              </div>{
                  navitem.dropdown.length > 0 && <>
                    {
                      dropdownActive && (
                        <ul className='dropdown-container'>
                          {
                            navitem.dropdown.map(item => {
                              return (
                                <div key={item.name} className={`${pathname === `${item.slug}` ? 'text-active' : ''}`}>
                                  <li onClick={() => history.push(`${item.slug}`)} className='dropdown-item'>
                                    <strong>{item.name}</strong>
                                  </li>
                                </div>
                              )
                            })
                          }
                        </ul>
                      )
                    }
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
