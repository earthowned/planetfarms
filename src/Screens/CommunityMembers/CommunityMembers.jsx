import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers } from '../../actions/userAction'
import CardImage from '../../Components/CardImage/CardImage'
import SearchComponent from '../../Components/SearchComponent/SearchComponent'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import './community-members.css'

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
    <DashboardLayout title='Ragrarians members'>
      <div className='community-members'>
        <div className='community-members-flex-col'>
          <div className='search-container'>
            <SearchComponent className='search border-1px-onyx' />
          </div>
          <div className='community-members-flex-row'>{users && <CardImage follow='Follow' users={users} />}</div>
        </div>
      </div>
    </DashboardLayout>
  )
}
export default CommunityMembers
