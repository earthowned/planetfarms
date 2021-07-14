import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../../components/button/Button'
import FormModal from '../../components/formModal/FormModal'
import CommunityGroupCard from '../../components/communityGroupCard/CommunityGroupCard'
import Filter from '../../components/filter/Filter'
import SearchComponent from '../../components/searchComponent/SearchComponent'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './CommunityGroup.scss'
import { useSelector, useDispatch } from 'react-redux'
import { searchGroups, listGroups, groupDelete, listUserGroups } from '../../actions/communityGroupActions'
import Pagination from '../../components/pagination/Pagination'
import useSizeFinder from '../../utils/sizeFinder'
import { getApi } from '../../utils/apiFunc'

const CommunityGroup = () => {
  // fetching current community
  const currentCommunity = localStorage.getItem('currentCommunity')
    ? JSON.parse(localStorage.getItem('currentCommunity'))
    : null

  // navigtion bar
  const windowWidth = useSizeFinder()
  const { pathname } = useLocation()

  const nav = [
    {
      label: 'All Groups',
      link: `/community-group/${currentCommunity.slug}`
    },
    {
      label: 'Your Groups',
      link: `/your-community-group/${currentCommunity.slug}`
    }
  ]

  const [editData, setEditData] = useState(null)
  const data = useSelector((state) => state.listGroups)
  const dataUser = useSelector((state) => state.listUserGroups)
  const { groups } = data
  const { userGroups } = dataUser

  const { success: groupUpdateSuccess } = useSelector((state) => state.groupUpdate)
  const { success: groupDeleteSuccess } = useSelector((state) => state.groupDelete)
  const { success: groupCreateSuccess } = useSelector((state) => state.groupCreate)
  const dispatch = useDispatch()

  const [active, setActive] = useState(false)
  const [search, setSearch] = useState(null)
  const [deleteId, setDeleteId] = useState(null)
  const [deleteModal, setDeleteModal] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [userPageNumber, setUserPageNumber] = useState(1)
  const handleClickCreate = () => {
  }

  useEffect(() => {
    if (search) dispatch(searchGroups(search))
    if (!search) dispatch(listGroups({ pageNumber }))

    if (pathname === `/your-community-group/${currentCommunity.slug}`) {
      // if (search) dispatch(searchGroups(search))
      if (!search) dispatch(listUserGroups({ communityId: currentCommunity.id, pageNumber: userPageNumber }))
    }
  }, [search, dispatch, groupUpdateSuccess, groupDeleteSuccess, groupCreateSuccess, pathname, pageNumber, userPageNumber])

  const editCard = async (id) => {
    const { data } = await getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/groups/${id}/community/${currentCommunity.id}`)
    setEditData(data)
    setActive(true)
  }

  const deleteCard = (id) => {
    setDeleteModal(true)
    setDeleteId(id)
  }

  const confirmDelete = () => {
    dispatch(groupDelete(deleteId))
    setDeleteModal(false)
  }

  return (
    <>
      {active && <FormModal setActive={setActive} data={editData} setData={setEditData} />}
      {deleteModal && <div className='simple-modal-container'>
        <div className='simple-modal-inner-container'>
          <div>
            <h4>Are you sure you want to delete?</h4>
            {/* <button onClick={() => confirmDelete}><img src='/img/close-outline.svg' alt='close-outline' /></button> */}
          </div>
          <div>
            <button className='secondary-btn' onClick={confirmDelete}>Confirm</button>
            <button className='secondary-btn' onClick={() => setDeleteModal(false)}>Cancel</button>
          </div>
        </div>
                      </div>}
      <DashboardLayout title='Community Group'>
        <div className='x05-0-0-all-groups'>
          <div className='group-flex-col-4'>
            <div className='community-group-main-header-container'>
              <div className='flex-row-5'>
                {windowWidth > 720
                  ? <ul className='courses-list-container'>
                    {
                  nav.map(item => {
                    return (
                      <li>
                        <Link
                          className={`nav-link ${(pathname === `${item.link}`)
                          ? 'courses-list-item active'
                          : 'library-list-item'}`} to={`${item.link}`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })
                }
                    </ul>
                  : <Filter name='All Enterprises' noImage />}
                <div className='community-group-search-container'>
                  <SearchComponent className='search-bar' search={search} setSearch={setSearch} />
                </div>
              </div>
              <div className='button-filter-container'>
                <div className='community-group-header-btn-container' onClick={() => setActive(true)}>
                  <Button name='Create group' onClick={handleClickCreate} />
                </div>
                {/* <FilterByCategory /> comes here */}
                <Filter />
              </div>
            </div>
            <div className='community-group-container'>
              {
          pathname === `/community-group/${currentCommunity.slug}`
            ? <CommunityGroupCard
                location='/community-group-view-page/:id'
                data={groups}
                editCard={editCard}
                setActive={setActive}
                deleteCard={deleteCard}
              />
            : <CommunityGroupCard
                location='/community-group-view-page/:id'
                data={userGroups}
                editCard={editCard}
                setActive={setActive}
                deleteCard={deleteCard}
              />
        }
            </div>
            {
             pathname === `/community-group/${currentCommunity.slug}`
               ? <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} resourceList={data} />
               : <Pagination pageNumber={userPageNumber} setPageNumber={setUserPageNumber} resourceList={dataUser} />
            }
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default CommunityGroup
