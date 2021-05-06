import React from 'react'
import { Link } from 'react-router-dom'
import CardImage from '../../Components/CardImage/CardImage'
import SearchComponent from '../../Components/SearchComponent/SearchComponent'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import './community-members.css'

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
        <div className='community-members-flex-row'>
          <CardImage follow='Follow' />
        </div>
      </div>
    </div>
  )
}
