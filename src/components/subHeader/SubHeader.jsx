import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'
import useSizeFinder from '../../utils/sizeFinder'
import Filter from '../filter/Filter'
import SearchComponent from '../searchComponent/SearchComponent'
import './SubHeader.scss'

const SubHeader = ({ search, setSearch, nav, setCreateActive, btnName }) => {
  const windowWidth = useSizeFinder()
  const { pathname } = useLocation()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const history = useHistory()

  const dispatch = useDispatch()
  
  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
  }, [search, dispatch, history, userInfo])

  return (
    <div className='sub-header-main-container'>
      <div className='sub-header-left-container'>
        {windowWidth > 640
          ? <>
            <ul className='sub-header-list-container'>
              {nav.map((menu) => (
                <li>
                  <Link className={`nav-link ${(pathname === menu.link) ? 'sub-header-list-item active' : 'sub-header-list-item'}`} to={menu.link}>{menu.label}</Link>
                </li>
              ))}
            </ul>
            <SearchComponent search={search} setSearch={setSearch} className='search-btn margin-0' />
            </>
          : <>
            <Filter newFilter data={nav} />
            <SearchComponent search={search} setSearch={setSearch} className='search search-btn margin-0' />
            </>}
      </div>
      <div className='sub-header-right-container'>
        <div className='row-1'>
          <div className='sub-header-btn-container'>
            <button className='default-btn' onClick={() => setCreateActive(true)}>{btnName}</button>
          </div>
        </div>

        <div className='row-2'>
          <Filter />
        </div>
      </div>
    </div>
  )
}

export default SubHeader
