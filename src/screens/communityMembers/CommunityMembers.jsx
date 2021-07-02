import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listUsers, searchUsers } from '../../actions/userAction'
import CardImage from '../../components/cardImage/CardImage'
import SearchComponent from '../../components/searchComponent/SearchComponent'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './CommunityMembers.css'

function CommunityMembers ({ history }) {
  const dispatch = useDispatch()
  const [search, setSearch] = useState(null)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      if (search) dispatch(searchUsers(search))
      if (!search) dispatch(listUsers())
    } else {
      history.push('/login')
    }
  }, [search, dispatch, history, userInfo])

  const userList = useSelector((state) => state.userList)
  const users = userList.searchUsers ? userList.searchUsers : userList.users

  return (
    <DashboardLayout title='Ragrarians News'>
      <div className='community-members'>
        <div className='community-members-flex-col'>
          <div className='search-container'>
            <SearchComponent className='search border-1px-onyx' />
          </div>
          <div className='community-members-grid-row'>
            {users && <CardImage follow='Follow' users={users} />}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
export default CommunityMembers
