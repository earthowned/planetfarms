import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import './sidebar.css'

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
  }
]

const Sidebar = ({ setToggle, toggle, mobileView, burgerActive }) => {
  const [dropdownActive, setDropdownActive] = useState(true)

  const handleToggle = () => {
    setToggle(!toggle)
    if (toggle === true) {
      setDropdownActive(false)
    } else {
      setDropdownActive(true)
    }
  }

  return (
    <>
      {
      !mobileView
        ? <><button className='nav-icon' onClick={() => handleToggle()}>
          <img src='/img/sidebar-arrow-icon.svg' alt='toggle icon with arrow sign' />
            </button>
          <div className='logo-container'>
            {toggle
              ? <img className='logo' src='/img/logo.svg' alt='full logo' />
              : <img className='logo-2' src='/img/p-icon.svg' alt='p-icon logo' />}
          </div>
          <MainNav dropdownActive={dropdownActive} setDropdownActive={setDropdownActive} />
          </>
        : <div className={`mobile-view-dropdown-container ${burgerActive && 'slide'}`}>
          <MainNav dropdownActive={dropdownActive} setDropdownActive={setDropdownActive} />
          </div>
    }
    </>
  )
}

export default Sidebar

function MainNav ({ dropdownActive, setDropdownActive }) {
  const history = useHistory()
  const { pathname } = useLocation()
  const handleOnClick = () => {
    setDropdownActive(!dropdownActive)
  }

  return (
    <ul className='list-container'>
      {
        mainnav.map(navitem => {
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
                                <div key={item.name} className={`${pathname === `${item.slug}` ? '  text-active' : ''}`}>
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
  )
}
