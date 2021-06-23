import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { listCommunities, searchCommunities, createCommunity, listUserCommunities, searchUserCommunities, communityDelete, communityUpdate } from "../../actions/communityActions";
import CommunitiesCard from '../../components/communitiesCard/CommunitiesCard'
import DragDrop from "../../components/dragDrop/dragDrop";
import Filter from '../../components/filter/Filter'
import InputComponent from "../../components/input/InputComponent";
import CollectionModalHeader from "../../components/newsCreateModal/CollectionModalHeader";
import SearchComponent from '../../components/searchComponent/SearchComponent'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import useSizeFinder from "../../utils/sizeFinder";
import './CommunitySwitching.scss'
import Pagination from "../../components/pagination/Pagination";
import axios from "axios";

function App () {
  const[modalActive, setModalActive] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const communitiesState = useSelector((state) => state.listCommunities);

  const dispatch = useDispatch();
    // fetching current community
const currentCommunity = localStorage.getItem('currentCommunity')
  ? JSON.parse(localStorage.getItem('currentCommunity'))
  : null

  const editCard = async (id) => {
     const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/communities/${id}`)
    setEditData(data)
    setModalActive(true);
  }
  
 const deleteCard = (id) => {
    setDeleteModal(true);
    setDeleteId(id);
  }

  const creatorId = 2;

  const confirmDelete = () => {
    dispatch(communityDelete(deleteId, creatorId))
    setDeleteModal(false);
  }

  return (
    <>
    {modalActive && <CommunityModal setActive={setModalActive} data={editData} />}
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
    <DashboardLayout title="All Communities">
      <AllCommunities setModalActive={setModalActive} editCard={editCard} deleteCard={deleteCard} />
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} resourceList={communitiesState} />
    </DashboardLayout>
    </>
  )
}

export default App

function AllCommunities ({setModalActive, editCard, deleteCard}) {
  const {pathname} = useLocation();
  const [search, setSearch] = useState(null)
  
const {success:communityDeleteSuccess} = useSelector((state) => state.communityDelete)
const {success:communityUpdateSuccess} = useSelector((state) => state.communityUpdate)
  
   const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const communitiesState = useSelector((state) => state.listCommunities);
  const {error, loading, communities} = communitiesState
    
  const userCommunitiesState = useSelector((state) => state.listUserCommunities);
  const {error:user_com_error, loading:user_com_loading, userCommunities} = userCommunitiesState
  //create community
  const createCommunity = useSelector((state) => state.addCommunity);
  const {success:createSuccess} = createCommunity
  const dispatch = useDispatch()
  
  useEffect(() => {
        if(!search) dispatch(listCommunities());
        if(search) dispatch(searchCommunities(search));

        if(pathname==='/community-switching/my-communities') {
          if(!search) dispatch(listUserCommunities(1))
          if(search) dispatch(searchUserCommunities(1, search));
        }
  }, [search, dispatch, createSuccess, pathname, communityDeleteSuccess]);

  
  return (
    <>
        <CommunityHeader setActive={setModalActive} search={search} setSearch={setSearch} />
        <div style={{width: '100%', minHeight: '130%'}}>
        {
          pathname==='/community-switching/my-communities' 
          ? <><CommunitiesCard data={userCommunities} editCard={editCard} deleteCard={deleteCard} /> 
          {/* <Pagination pageNumber={userCommunities.pageNumber} /> */}
          </>
          : <><CommunitiesCard data={communities} editCard={editCard} deleteCard={deleteCard} /> 
          {/* <Pagination /> */}
          </>
        }
        </div>
    </>)  
}

const CommunityHeader = ({setActive, search, setSearch}) => {
  const { pathname } = useLocation()
  const history = useHistory()
  const windowWidth = useSizeFinder();
  
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

const CommunityModal = ({setActive, data}) => {
  const [files, setFiles] = useState();
  const [name, setName] = useState(data ? data.name : '');
  const [desc, setDesc] = useState(data ? data.description : '');
  const [category, setCategory] = useState(data ? data.category : '');
  // const [userId, setUserId] = useState(0);
  const userId = 2;
  const dispatch = useDispatch()
  
  function addCommunity () {
    dispatch(createCommunity({files, name, desc, userId, category}))
    setActive(false);
  }

  function updateCommunity () {
     dispatch(communityUpdate({
          id: data.id,
          name: name,
          description: desc,
          file: files,
          creatorId: userId
        }))
    setActive(false);
  }
  
  return(
    <div className='collection-modal-container'>
        <div>
          <div className='collection-modal-inner-container'>
            <CollectionModalHeader title='Create Community' clickHandler={setActive} />
            <DragDrop files={files} onChange={setFiles} />
            <InputComponent name="Community Name" text={name} changeHandler={setName} />
            <InputComponent name="Description" text={desc} changeHandler={setDesc} />
            <InputComponent name="Category" text={category} changeHandler={setCategory} />
            {/* <InputComponent name="User Id" text={userId} changeHandler={setUserId} /> */}
             {data 
             ? <Button name="Update Community" clickHandler={updateCommunity} />
             : <Button name="Create Community" clickHandler={addCommunity} />
              }
          </div>
        </div>
      </div>
  )
}
