import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers, searchUsers } from '../../actions/userAction'
import CardImage from '../../Components/CardImage/CardImage'
import SearchComponent from '../../Components/SearchComponent/SearchComponent'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import './community-members.css'

function CommunityMembers({ history }) {
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
    <DashboardLayout title='Ragrarians members'>
      <div className='community-members'>
        <div className='community-members-flex-col'>
          <div className='search-container'>
            <SearchComponent search={search} setSearch={setSearch} className='search border-1px-onyx' />
          </div>
          <div className='community-members-flex-row'>{users && <CardImage follow='Follow' users={users} />}</div>
        </div>
      </div>
    </DashboardLayout>
  )
}
export default CommunityMembers
