import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listMembers, searchMembers } from '../../actions/memberActions'
import { listUsers, searchUsers } from '../../actions/userAction'
import CardImage from '../../components/cardImage/CardImage'
import SearchComponent from '../../components/searchComponent/SearchComponent'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import Pagination from '../../components/pagination/Pagination'
import './CommunityMembers.css'

function CommunityMembers ({ history }) {
  const dispatch = useDispatch()
  const [search, setSearch] = useState(null)
  const resourceList = useSelector(state => state.listMember)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [pageNumber, setPageNumber] = useState(1)

  // fetching current community
  const currentCommunity = localStorage.getItem('currentCommunity')
    ? JSON.parse(localStorage.getItem('currentCommunity'))
    : null

  useEffect(() => {
    if (userInfo) {
      if (search) dispatch(searchMembers(search))
      if (!search) dispatch(listMembers({ sort: '', pageNumber }))
    }
  }, [search, dispatch, history, userInfo, pageNumber])

  return (
    <DashboardLayout title={currentCommunity.name}>
      <div className='community-members'>
        <div className='community-members-flex-col'>
          <div className='search-container'>
            <SearchComponent className='search border-1px-onyx' search={search} setSearch={setSearch} />
          </div>
          <div className='community-members-grid-row'>
            {resourceList.members && <CardImage follow='Follow' data={resourceList.members} />}
          </div>
          <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} resourceList={resourceList} />
        </div>
      </div>
    </DashboardLayout>
  )
}
export default CommunityMembers
