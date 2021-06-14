import React, { useEffect, useState } from 'react'
<<<<<<< HEAD:src/components/coursesHeader/CoursesHeader.jsx
import Filter from '../filter/Filter'
import SearchComponent from '../searchComponent/SearchComponent'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useHistory } from 'react-router-dom'
import './CoursesHeader.css'
import useSizeFinder from '../../utils/sizeFinder'

const data = [
  {
    label: 'All courses',
    link: '/courses'
  },
  {
    label: 'My courses & collections',
    link: '/courses/my-courses'
  },
  {
    label: 'Users collections',
    link: '/courses/users'
  },
  {
    label: 'My collections',
    link: '/courses/my-collection'
  }
]

const CoursesHeader = ({ setActive, setCreateCollection, location, setCreateCourse }) => {
=======
import { Link, useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Filter from '../Filter/Filter'
import SearchComponent from '../SearchComponent/SearchComponent'
import data from './headerData'
import './CoursesHeader.scss'

const CoursesHeader = ({
  setActive,
  setCreateCollection,
  location,
  setCreateCourse
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
>>>>>>> ec31d22... course header course formated:src/Components/coursesHeader/CoursesHeader.jsx
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const { pathname } = useLocation()
  const history = useHistory()

  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  useEffect(() => {
<<<<<<< HEAD:src/components/coursesHeader/CoursesHeader.jsx
    // if (!userInfo) {
    //     history.push('/login')
    // }
    // if (search) dispatch(searchResources(search))
    // if (!search) dispatch(listResources())

  }, [search, dispatch, history, userInfo])
=======
    if (!userInfo) {
      history.push('/login')
    }
    return () => {
      window.removeEventListener('resize', function () {
        setWindowWidth(window.innerWidth)
      })
    }
  }, [windowWidth, search, dispatch, history, userInfo])
>>>>>>> ec31d22... course header course formated:src/Components/coursesHeader/CoursesHeader.jsx

  function createCollection () {
    setActive(true)
    setCreateCollection(true)
  }

  const windowWidth = useSizeFinder()

  return (
    <div className='courseHeader'>
      <div className='container'>
        {windowWidth > 839 ? (
          <>
            <ul className='lists'>
              {data.map(({ name, slug }) => {
                return (
                  <li key={slug}>
                    <Link
<<<<<<< HEAD:src/components/coursesHeader/CoursesHeader.jsx
                      className={`nav-link ${(pathname === `${item.link}`)
                    ? 'courses-list-item active'
                    : 'library-list-item'}`} to={`${item.link}`}
                    >
                      {item.label}
=======
                      className={`nav-link ${
                        pathname === `${slug}`
                          ? 'list list-active'
                          : 'library-list-item'
                      }`}
                      to={`${slug}`}
                    >
                      {name}
>>>>>>> ec31d22... course header course formated:src/Components/coursesHeader/CoursesHeader.jsx
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className='searchBox'>
              <SearchComponent
                search={search}
                setSearch={setSearch}
                className='search-btn margin-0'
              />
            </div>
          </>
        ) : (
          <>
            <Filter data={data} newFilter='new' />
            <div className='searchBox'>
              <SearchComponent
                search={search}
                setSearch={setSearch}
                className='search search-btn margin-0'
              />
            </div>
          </>
        )}
      </div>
      <div className='coursesSubHeader'>
        <div className='subcontainer'>
          <div className='btnContainer'>
            {pathname === '/admin/courses' ? (
              <button
                className='default-btn'
                onClick={() => setCreateCourse(true)}
              >
                Add new Courses
              </button>
            ) : (
              <button
                className='default-btn'
                onClick={() => setCreateCourse(true)}
              >
                Add Courses
              </button>
            )}
          </div>
        </div>

        <div className='subHeader2'>
          <Filter name='filter by category' />
        </div>
      </div>
    </div>
  )
}

export default CoursesHeader
