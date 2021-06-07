import React, { useState, useEffect } from 'react'
import './Enterprises.css'
import SearchComponent from '../../Components/SearchComponent/SearchComponent'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import CommunityGroupCard from '../../Components/CommunityGroupCard/CommunityGroupCard'
import { useSelector, useDispatch } from 'react-redux'
import { listEnterprises, searchEnterprises } from '../../actions/enterpriseAction'
import FormModal from '../../Components/FormModal/FormModal'
import Filter from '../../Components/Filter/Filter'
import useSizeFinder from '../../utils/SizeFinder'

const Enterprise = () => {
  const data = useSelector((state) => state.listEnterprises.enterprises.enterprises)
  const [search, setSearch] = useState(null)
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   if (search) dispatch(searchEnterprises(search))
  //   if (!search) dispatch(listEnterprises())
  // }, [search, dispatch])

  return (
    <>
      {active && <FormModal setActive={setActive} />}
      <DashboardLayout title='Enterprises'>
        <div className='all-enterprises'>
          <div className='enterprises-col'>
            <EnterpriseHeader search={search} setSearch={setSearch} setActive={setActive} />
            <div className='enterpriseCard'>
              {/* <CommunityGroupCard data={data} type="enterpise" /> */}
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
          <div className='create-enterprise-text' onClick={() => setActive(true)}>
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
  return (
    <>
      {
      windowWidth > 720
        ? <div className='enterprises-option'>
          <div className='enterprises-option-first'>
            <div className='all-enterprises-text'>
              All Enterprises
            </div>
          </div>
          <div className='enterprises-option-second'>
            <div className='your-enterprises ibmplexsans-semi-bold-quarter-spanish-white-16px'>
              Your Enterprises
            </div>
          </div>
          </div>
        : <Filter name='All Enterprises' noImage />
    }
    </>
  )
}

export default Enterprise
