import React from 'react'
import CommunitiesCard from '../../Components/CommunitiesCard/CommunitiesCard'
import Filter from '../../Components/Filter/Filter'
import SearchComponent from '../../Components/SearchComponent/SearchComponent'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import './community-switching.css'

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
