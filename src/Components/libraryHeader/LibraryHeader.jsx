import React, { useEffect, useState } from 'react'
import Filter from '../Filter/Filter'
import SearchComponent from '../SearchComponent/SearchComponent'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useHistory } from 'react-router-dom'
import './library-header.css'
import { searchResources, listResources } from '../../actions/resourceActions'

const data = [{
  label: 'All files',
  link: '/library'
}, {
  label: 'My library & collections',
  link: '/library/collection'
}, {
  label: 'Users collection',
  link: '/library/collection/users'
}, {
  label: 'Saved collection',
  link: '/library/collection/saved'
}]

const LibraryHeader = ({ setActive }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const { pathname } = useLocation()
  const history = useHistory()

  const dispatch = useDispatch()
  const [search, setSearch] = useState(null)

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
    if (search) dispatch(searchResources(search))
    if (!search) dispatch(listResources('', 0))

    window.addEventListener('resize', function () {
      setWindowWidth(window.innerWidth)
    })

    return () => {
      window.removeEventListener('resize', function () {
        setWindowWidth(window.innerWidth)
      })
    }
  }, [windowWidth, search, dispatch, history, userInfo])

  return (
    <div className='library-main-header-container'>
      <div className='library-container'>
        {windowWidth > 839
          ? <>
            <ul className='library-list-container'>
              {data.map((menu) => (
                <li>
                  <Link className={`nav-link ${(pathname === menu.link) ? 'library-list-item active' : 'library-list-item'}`} to={menu.link}>{menu.label}</Link>
                </li>
              ))}
            </ul>
            <SearchComponent search={search} setSearch={setSearch} className='search-btn margin-0' />
          </>
          : <>
            <Filter data={data} newFilter='new' />
            <SearchComponent search={search} setSearch={setSearch} className='search search-btn margin-0' />
            </>}
      </div>
      <div className='library-sub-header'>
        <div className='library-sub-header-1'>
          <div className='library-btn-container'><button className='default-btn' onClick={() => setActive(true)}>Add files</button></div>
        </div>

        <div className='library-sub-header-2'>
          <Filter />
        </div>
      </div>
    </div>
  )
}

export default LibraryHeader
