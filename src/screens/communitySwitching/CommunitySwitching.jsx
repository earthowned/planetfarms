import React from 'react'
import CommunitiesCard from '../../components/communitiesCard/CommunitiesCard'
import Filter from '../../components/filter/Filter'
import SearchComponent from '../../components/searchComponent/SearchComponent'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './CommunitySwitching.scss'

function App () {
  return (
    <DashboardLayout title='All Communities'>
      <AllCommunities />
    </DashboardLayout>
  )
}

export default App

function AllCommunities (props) {
  return (
    <div className='x07-1-0-all-communities'>
      <div className='community-switch-container'>
        <div className='community-switch-sub-header'>
          <div className='community-switch-sub-header-1'>
            <SearchComponent className='search border-1px-onyx' />
          </div>
          <div className='community-switch-sub-header-2'>
            <Filter />
          </div>
        </div>
        <CommunitiesCard />
      </div>
    </div>
  )
}
