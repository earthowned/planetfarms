import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listMembers, searchMembers } from '../../actions/memberActions'
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
  const [search, setSearch] = useState(null)
  const {members} = useSelector(state => state.listMember);

  const dispatch = useDispatch();
  useEffect(() => {
    if (search) dispatch(searchMembers(search))
    if (!search) dispatch(listMembers())
  }, [search, dispatch])
  return (
    <div className='community-members'>
      <div className='community-members-flex-col'>
        <div className='search-container'>
          <SearchComponent className='search border-1px-onyx' search={search} setSearch={setSearch} />
        </div>
        <div className='community-members-grid-row'>
          <CardImage follow='Follow' data={members.data || members} />
        </div>
      </div>
    </div>
  )
}
