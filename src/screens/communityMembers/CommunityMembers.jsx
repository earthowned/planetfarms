import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listUsers } from '../../actions/userAction'
import CardImage from '../../components/cardImage/CardImage'
import SearchComponent from '../../components/searchComponent/SearchComponent'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './CommunityMembers.css'

function CommunityMembers({ history }) {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      dispatch(listUsers())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])
  return (
    <div className='community-members'>
      <div className='community-members-flex-col'>
        <div className='search-container'>
          <SearchComponent className='search border-1px-onyx' />
        </div>
        <div className='community-members-grid-row'>
          {users && <CardImage follow='Follow' users={users}/>}
        </div>
      </div>
    </div>
  )
}
export default CommunityMembers
