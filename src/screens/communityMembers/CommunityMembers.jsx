import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listMembers } from '../../actions/memberActions'
import CardImage from '../../components/cardImage/CardImage'
import SearchComponent from '../../components/searchComponent/SearchComponent'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import Pagination from '../../components/pagination/Pagination'
import './CommunityMembers.css'
import useSizeFinder from '../../utils/sizeFinder'

function CommunityMembers ({ history }) {
  const [col, setCol] = useState(3)
  const windowWidth = useSizeFinder()
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const memberList = useSelector(state => state.listMember)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [pageNumber, setPageNumber] = useState(1)

  // fetching current community
  const currentCommunity = window.localStorage.getItem('currentCommunity')
    ? JSON.parse(window.localStorage.getItem('currentCommunity'))
    : null

  const pageSizeByColumn = (callbackFunc, params) => {
    if (col === 3) {
      return callbackFunc({ ...params, pageSize: 9 })
    } else if (col === 4) {
      return callbackFunc({ ...params, pageSize: 8 })
    }
  }

  useEffect(() => {
    if (windowWidth < 1439 && windowWidth > 768) {
      setCol(3)
    } else {
      setCol(4)
    }
  }, [windowWidth])

  useEffect(() => {
    if (userInfo) {
      dispatch(pageSizeByColumn(listMembers, { sort: '', pageNumber, pageSize: 8, search }))
    }
  }, [search, dispatch, history, userInfo, pageNumber, col])

  return (
    <DashboardLayout title={currentCommunity.name}>
      <div className='community-members'>
        <div className='community-members-flex-col'>
          <div className='search-container'>
            <SearchComponent className='search border-1px-onyx' search={search} setSearch={setSearch} />
          </div>
          <div className='community-members-grid-row'>
            {memberList.members && <CardImage follow='Follow' data={memberList.members} />}
          </div>
          <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} resourceList={memberList} />
        </div>
      </div>
    </DashboardLayout>
  )
}
export default CommunityMembers
