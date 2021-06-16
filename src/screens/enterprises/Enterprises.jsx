import React, { useState, useEffect } from 'react'
import './Enterprises.css'
import SearchComponent from '../../components/searchComponent/SearchComponent'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import CommunityGroupCard from '../../components/communityGroupCard/CommunityGroupCard'
import { useSelector, useDispatch } from 'react-redux'
import { listEnterprises, searchEnterprises } from '../../actions/enterpriseAction'
import FormModal from '../../components/formModal/FormModal'
import Filter from '../../components/filter/Filter'
import useSizeFinder from '../../utils/sizeFinder'
import { Link, useLocation } from 'react-router-dom'

const nav = [
  {
    label: 'All enterprises',
    link: '/enterprises'
  },
  {
    label: 'Your Enterprises',
    link: '/your-enterprises'
  }
]

const Enterprise = () => {
  const data = useSelector((state) => state.listEnterprises.enterprises.enterprises)
  const [search, setSearch] = useState(null)
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (search) dispatch(searchEnterprises(search))
    if (!search) dispatch(listEnterprises())
  }, [search, dispatch])

  return (
    <>
      {active && <FormModal setActive={setActive} />}
      <DashboardLayout title='Enterprises'>
        <div className='all-enterprises'>
          <div className='enterprises-col'>
            <EnterpriseHeader search={search} setSearch={setSearch} setActive={setActive} />
            <div className='enterpriseCard'>
              <CommunityGroupCard data={data} type='enterpise' />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

function EnterpriseHeader ({ search, setSearch, setActive }) {
  return (
    <div className='enterprises-row'>
      <div className='enterprises-header'>
        <FirstHeader />
        <SearchComponent className='search border-1px-onyx' search={search} setSearch={setSearch} />
      </div>
      <div className='create-enterprises-wrapper'>
        <div className='add-enterprises'>
          <div className='create-enterprise-text ibmplexsans-semi-bold-shark-16px' onClick={() => setActive(true)}>
            Create Enterprise
          </div>
        </div>
        <div className='enterprise-filter'>
          <Filter />
        </div>
      </div>
    </div>
  )
}

function FirstHeader () {
  const windowWidth = useSizeFinder()
  const { pathname } = useLocation()
  return (
    <>
      {windowWidth > 720
        ? <ul className='courses-list-container'>
          {
          nav.map(item => {
            return (
              <li>
                <Link
                  className={`nav-link ${(pathname === `${item.link}`)
                  ? 'courses-list-item active'
                  : 'library-list-item'}`} to={`${item.link}`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })
        }
        </ul>
        : <Filter name='All Enterprises' noImage />}
    </>
  )
}

export default Enterprise
