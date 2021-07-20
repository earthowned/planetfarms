import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import { listCommunities, searchCommunities, createCommunity, listUserCommunities, searchUserCommunities, communityDelete, communityUpdate } from '../../actions/communityActions'
import CommunitiesCard from '../../components/communitiesCard/CommunitiesCard'
import DragDrop from '../../components/dragDrop/DragDrop'
import Filter from '../../components/filter/Filter'
import CollectionModalHeader from '../../components/newsCreateModal/CollectionModalHeader'
import SearchComponent from '../../components/searchComponent/SearchComponent'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import useSizeFinder from '../../utils/sizeFinder'
import './CommunitySwitching.scss'
import Pagination from '../../components/pagination/Pagination'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { InputFields, SelectFields } from '../../components/formUI/FormUI'
import ToggleSwitch from '../../components/toggleSwitch/ToggleSwitch'

function App () {
  const communitiesState = useSelector((state) => state.listCommunities)
  const userCommunitiesState = useSelector((state) => state.listUserCommunities)
  const { pathname } = useLocation()
  const [modalActive, setModalActive] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [deleteModal, setDeleteModal] = useState(false)
  const [editData, setEditData] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [userPageNumber, setUserPageNumber] = useState(1)

  const dispatch = useDispatch()

  const editCard = async (id) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/communities/${id}`)
    setEditData(data)
    setModalActive(true)
  }

  const deleteCard = (id) => {
    setDeleteModal(true)
    setDeleteId(id)
  }

  const confirmDelete = () => {
    dispatch(communityDelete(deleteId))
    setDeleteModal(false)
  }

  return (
    <>
      {modalActive && <CommunityModal setActive={setModalActive} data={editData} setEditData={setEditData} />}
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
      <DashboardLayout title='All Communities'>
        <AllCommunities
          setModalActive={setModalActive} editCard={editCard} deleteCard={deleteCard} pageNumber={pageNumber} userPageNumber={userPageNumber}
        />
        {
          pathname === '/community-switching/my-communities'
            ? <Pagination pageNumber={userPageNumber} setPageNumber={setUserPageNumber} resourceList={userCommunitiesState} />
            : <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} resourceList={communitiesState} />
        }
      </DashboardLayout>
    </>
  )
}

export default App

function AllCommunities ({ setModalActive, editCard, deleteCard, pageNumber, userPageNumber }) {
  const { pathname } = useLocation()
  const [search, setSearch] = useState(null)
  const { success: communityDeleteSuccess } = useSelector((state) => state.communityDelete)
  const { success: communityUpdateSuccess } = useSelector((state) => state.communityUpdate)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const communitiesState = useSelector((state) => state.listCommunities)
  const { error, loading, communities } = communitiesState

  const userCommunitiesState = useSelector((state) => state.listUserCommunities)
  const { error: user_com_error, loading: user_com_loading, userCommunities } = userCommunitiesState
  // create community
  const createCommunity = useSelector((state) => state.addCommunity)
  const { success: createSuccess } = createCommunity
  const dispatch = useDispatch()
  // const userId = 2;
  useEffect(() => {
    if (!search) dispatch(listCommunities({ pageNumber }))
    if (search) dispatch(searchCommunities(search))
    if (pathname === '/community-switching/my-communities') {
      if (!search) dispatch(listUserCommunities({ userPageNumber }))
      if (search) dispatch(searchUserCommunities(search))
    }
  }, [search, dispatch, createSuccess, pathname, communityDeleteSuccess, communityUpdateSuccess, pageNumber, userPageNumber])

  return (
    <>
      <CommunityHeader setActive={setModalActive} search={search} setSearch={setSearch} />
      <div>
        {
          pathname === '/community-switching/my-communities'
            ? <><CommunitiesCard data={userCommunities} editCard={editCard} deleteCard={deleteCard} />
            </>
            : <><CommunitiesCard data={communities} editCard={editCard} deleteCard={deleteCard} />
            </>
        }
      </div>
    </>
  )
}

const CommunityHeader = ({ setActive, search, setSearch }) => {
  const { pathname } = useLocation()
  const history = useHistory()
  const windowWidth = useSizeFinder()
  const nav = [
    {
      label: 'All communities',
      link: '/community-switching/all-communities'
    },
    {
      label: 'My communities',
      link: '/community-switching/my-communities'
    }
  ]
  return (
    <div className='library-main-header-container'>
      <div className='library-container'>
        {windowWidth > 839
          ? <>
            <ul className='library-list-container'>
              {nav.map((menu) => (
                <li>
                  <Link className={`nav-link ${(pathname === menu.link) ? 'library-list-item active' : 'library-list-item'}`} to={menu.link}>{menu.label}</Link>
                </li>
              ))}
            </ul>
            <SearchComponent search={search} setSearch={setSearch} className='search-btn margin-0' />
          </>
          : <>
            <Filter data={nav} newFilter='new' />
            <SearchComponent search={search} setSearch={setSearch} className='search search-btn margin-0' />
            </>}
      </div>
      <div className='library-sub-header'>
        <div className='library-sub-header-1'>
          <div className='library-btn-container'><button className='default-btn' onClick={() => setActive(true)}>Create Community</button></div>
        </div>
        <div className='library-sub-header-2'>
          <Filter />
        </div>
      </div>
    </div>
  )
}

const CommunityModal = ({ setActive, data, setEditData }) => {
  const [files, setFiles] = useState()
  const [toggleActive, setToggleActive] = useState(data ? data.auto_follow : false)

  const { error } = useSelector(state => state.addCommunity)
  const { register: regi, errors, handleSubmit } = useForm()
  const dispatch = useDispatch()

  function addCommunity ({ communityName, description, category }) {
    if (communityName && description) {
      dispatch(createCommunity({ file: files, name: communityName, description, category, toggleActive }))
      if (!error) {
        setActive(false)
      };
    }
  }

  function updateCommunity ({ description, communityName, category }) {
    if (description && communityName) {
      dispatch(communityUpdate({
        id: data.id,
        name: communityName,
        category,
        description,
        file: files,
        toggleActive
      }))
      clearInput()
      setActive(false)
    }
  }

  function clearInput () {
    setEditData(null)
    setActive(false)
  }

  return (
    <div className='collection-modal-container'>
      <div>
        <div className='collection-modal-inner-container'>
          <CollectionModalHeader title={data ? 'Update Community' : 'Create Community'} clickHandler={clearInput} />
          <form onSubmit={data ? handleSubmit(updateCommunity) : handleSubmit(addCommunity)}>
            {error && <div className='error-header'>
              <div className='error'>{error}</div>
            </div>}
            <DragDrop files={files} onChange={setFiles} dataImg={data && data.attachment} tag='community' />
            <InputFields
              type='text'
              placeholder='Community Name'
              name='communityName'
              id='name'
              defaultValue={data && data.name}
              ref={regi({
                required: {
                  value: true,
                  message: 'You must enter the name.'
                }
              })}
              errors={errors}
            />
            <InputFields
              type='text'
              placeholder='Description'
              name='description'
              id='description'
              defaultValue={data && data.description}
              ref={regi({
                required: {
                  value: true,
                  message: 'You must enter the description.'
                }
              })}
              errors={errors}
            />
            <SelectFields
              option={['Select Category', 'Farmers', 'Business', 'Accounting']}
              name='category'
              ref={regi()}
              errors={errors}
            />
            <div className='auto-follow-btn'>
              <h5>Auto follow</h5>
              <ToggleSwitch onClick={() => setToggleActive(!toggleActive)} isFree={toggleActive} />
            </div>
            {data
              ? <Button name='Update Community' onClick={updateCommunity} />
              : <Button name='Create Community' onClick={addCommunity} />}
          </form>
        </div>
      </div>
    </div>
  )
}
