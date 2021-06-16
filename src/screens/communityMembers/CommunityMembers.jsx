import React from 'react'
import { Link } from 'react-router-dom'
import CardImage from '../../components/cardImage/CardImage'
import SearchComponent from '../../components/searchComponent/SearchComponent'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './CommunityMembers.css'

function App () {
  return (
    <DashboardLayout title='Ragrarians members'>
      <CommunityMembers />
    </DashboardLayout>
  )
}
export default App

function CommunityMembers () {
  return (
    <div className='community-members'>
      <div className='community-members-flex-col'>
        <div className='search-container'>
          <SearchComponent className='search border-1px-onyx' />
        </div>
        <div className='community-members-grid-row'>
          <CardImage follow='Follow' />
        </div>
      </div>
    </div>
  )
}
