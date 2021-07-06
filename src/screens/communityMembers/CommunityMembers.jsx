import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listMembers, searchMembers } from '../../actions/memberActions'
import { listUsers, searchUsers } from '../../actions/userAction'
import CardImage from '../../components/cardImage/CardImage'
import SearchComponent from '../../components/searchComponent/SearchComponent'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './CommunityMembers.css'

function CommunityMembers ({ history }) {
  const dispatch = useDispatch()
  const [search, setSearch] = useState(null)
  const { members } = useSelector(state => state.listMember)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  // fetching current community
  const currentCommunity = localStorage.getItem('currentCommunity')
    ? JSON.parse(localStorage.getItem('currentCommunity'))
    : null

  useEffect(() => {
    if (userInfo) {
      if (search) dispatch(searchMembers(search))
      if (!search) dispatch(listMembers())
    } else {
      history.push('/login')
    }
  }, [search, dispatch, history, userInfo])

  return (
    <DashboardLayout title={currentCommunity.name}>
      <div className='community-members'>
        <div className='community-members-flex-col'>
          <div className='search-container'>
            <SearchComponent className='search border-1px-onyx' search={search} setSearch={setSearch} />
          </div>
          <div className='community-members-grid-row'>
            {members && <CardImage follow='Follow' data={members.data || members} />}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
export default CommunityMembers
