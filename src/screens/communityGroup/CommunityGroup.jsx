import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import FormModal from '../../components/formModal/FormModal'
import CommunityGroupCard from '../../components/communityGroupCard/CommunityGroupCard'
import Filter from '../../components/filter/Filter'
import SearchComponent from '../../components/searchComponent/SearchComponent'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './CommunityGroup.scss'
import { useSelector, useDispatch } from 'react-redux'
import { searchGroups, listGroups } from '../../actions/communityGroupActions'

const CommunityGroup = () => {
  const data = useSelector((state) => state.listGroups.groups)
  const dispatch = useDispatch()

  const [active, setActive] = useState(false)
  const [search, setSearch] = useState(null)
  const handleClickCreate = () => {

  }

  useEffect(() => {
    if (search) dispatch(searchGroups(search))
    if (!search) dispatch(listGroups())
  }, [search, dispatch])

  return (
    <>
      {active && <FormModal setActive={setActive} />}
      <DashboardLayout title='Community Group'>
        <div className='x05-0-0-all-groups'>
          <div className='group-flex-col-4'>
            <div className='community-group-main-header-container'>
              <div className='flex-row-5'>
                <div id='community-group-link-header' style={{ justifyContent: 'space-between' }}>
                  <div className='all-groups-1 border-1px-quarter-spanish-white'>
                    <div className='all-groups'>
                      All Groups
                    </div>
                  </div>
                  <Link to='/my-group-view-page'>
                    <div className='your-groups-1 border-class-1'>
                      <div className='your-groups ibmplexsans-semi-bold-quarter-spanish-white-16px'>
                        Your Groups
                      </div>
                    </div>
                  </Link>
                </div>
                <div className='community-group-search-container'>
                  <SearchComponent className='search-bar' search={search} setSearch={setSearch} />
                </div>
              </div>
              <div className='button-filter-container'>
                <div className='community-group-header-btn-container' onClick={() => setActive(true)}>
                  <Button name='Create group' clickHandler={handleClickCreate} />
                </div>
                {/* <FilterByCategory /> comes here */}
                <Filter />
              </div>
            </div>
            <div className='community-group-container'>
              <CommunityGroupCard location='/community-group-view-page/:id' data={data} />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default CommunityGroup
