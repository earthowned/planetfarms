import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import FormModal from '../../components/formModal/FormModal'
import CommunityGroupCard from '../../components/communityGroupCard/CommunityGroupCard'
import Filter from '../../components/filter/Filter'
import SearchComponent from '../../components/searchComponent/SearchComponent'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './CommunityGroup.scss'
import { useSelector, useDispatch } from 'react-redux'
import { searchGroups, listGroups, listGroupById, groupDelete } from '../../actions/CommunityGroupActions'
import axios from 'axios'

const CommunityGroup = () => {
  const [editData, setEditData] = useState(null);
  const data = useSelector((state) => state.listGroups.groups)
  const {success:groupUpdateSuccess} = useSelector((state) => state.groupUpdate)
  const {success:groupDeleteSuccess} = useSelector((state) => state.groupDelete)
  const dispatch = useDispatch()

  const [active, setActive] = useState(false)
  const [search, setSearch] = useState(null)
  const [deleteId, setDeleteId] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const handleClickCreate = () => {
  }

  useEffect(() => {
    if (search) dispatch(searchGroups(search))
    if (!search) dispatch(listGroups())
  }, [search, dispatch, groupUpdateSuccess, groupDeleteSuccess])

  // fetching current community
const currentCommunity = localStorage.getItem('currentCommunity')
  ? JSON.parse(localStorage.getItem('currentCommunity'))
  : null

  const editCard = async (id) => {
     const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/groups/${id}/community/${currentCommunity.id}`)
    setEditData(data)
    setActive(true);
  }
  
 const deleteCard = (id) => {
    setDeleteModal(true);
    setDeleteId(id);
  }

  const confirmDelete = () => {
    dispatch(groupDelete(deleteId))
    setActive(true);
  }


  return (
    <>
      {active && <FormModal setActive={setActive} data={editData} />}
      {deleteModal &&  <div className='simple-modal-container'>
        <div className='simple-modal-inner-container'>
          <div>
          <h4>Are you sure you want to delete?</h4>
          {/* <button onClick={() => confirmDelete}><img src='/img/close-outline.svg' alt='close-outline' /></button> */}
          </div>
          <div>
            <button className="secondary-btn" onClick={confirmDelete}>Confirm</button>
            <button className="secondary-btn" onClick={() => setDeleteModal(false)}>Cancel</button>
          </div>
        </div>
      </div>}
      <DashboardLayout title='Community Group'>
        <div className='x05-0-0-all-groups'>
          <div className='group-flex-col-4'>
            <div className='community-group-main-header-container'>
              <div className='flex-row-5'>
                <div id='community-group-link-header' style={{ justifyContent: 'space-between' }}>
                  <div className='all-groups-1 border-1px-quarter-spanish-white'>
                    <div className='all-groups'>
                      All Groups
                    </div>
                  </div>
                  <Link to='/my-group-view-page'>
                    <div className='your-groups-1 border-class-1'>
                      <div className='your-groups ibmplexsans-semi-bold-quarter-spanish-white-16px'>
                        Your Groups
                      </div>
                    </div>
                  </Link>
                </div>
                <div className='community-group-search-container'>
                  <SearchComponent className='search-bar' search={search} setSearch={setSearch} />
                </div>
              </div>
              <div className='button-filter-container'>
                <div className='community-group-header-btn-container' onClick={() => setActive(true)}>
                  <Button name='Create group' clickHandler={handleClickCreate} />
                </div>
                {/* <FilterByCategory /> comes here */}
                <Filter />
              </div>
            </div>
            <div className='community-group-container'>
              <CommunityGroupCard location='/community-group-view-page/:id' 
              data={data} 
              editCard={editCard} 
              setActive={setActive} 
              deleteCard={deleteCard}
              />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default CommunityGroup
