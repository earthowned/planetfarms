import React, { useState, useEffect } from 'react'
import './enterprises.css'
import SearchComponent from '../../Components/SearchComponent/SearchComponent'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import CommunityGroupCard from '../../Components/CommunityGroupCard/CommunityGroupCard'
import EnterprisesCollection from '../../Components/EnterprisesCollection/EnterprisesCollection'
import { useSelector, useDispatch } from 'react-redux'
import { listEnterprises, searchEnterprises } from '../../actions/enterpriseAction'

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
      {active && <EnterprisesCollection setActive={setActive} />}
      <DashboardLayout title='Enterprises'>
        <div className='all-enterprises screen'>
          <div className='enterprises-col'>
            <div className='enterprises-row'>
              <div className='enterprises-header'>
                <div className='enterprises-option'>
                  <div className='enterprises-option-first'>
                    <div className='all-enterprises-text ibmplexsans-semi-bold-shark-16px'>
                      All Enterprises
                    </div>
                  </div>
                  <div className='enterprises-option-second border-0-5px-white'>
                    <div className='your-enterprises ibmplexsans-semi-bold-quarter-spanish-white-16px'>
                      Your Enterprises
                    </div>
                  </div>
                </div>
                <SearchComponent className='search border-1px-onyx' search={search} setSearch={setSearch} />
              </div>
              <div className='create-enterprises-wrapper'>
                <div className='add-enterprises'>
                  <div className='create-enterprise-text ibmplexsans-semi-bold-shark-16px' onClick={() => setActive(true)}>
                    Create Enterprise
                  </div>
                </div>
              </div>
            </div>
            <div className='enterpriseCard'>
              <CommunityGroupCard data={data} />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default Enterprise
