import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { listCommunities, searchCommunities } from "../../actions/communityActions";
import Button from "../../components/button/Button";

import CommunitiesCard from '../../components/communitiesCard/CommunitiesCard'
import DragDrop from "../../components/dragDrop/dragDrop";
import Filter from '../../components/filter/Filter'
import InputComponent from "../../components/input/InputComponent";
import CollectionModalHeader from "../../components/newsCreateModal/CollectionModalHeader";
import SearchComponent from '../../components/searchComponent/SearchComponent'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import useSizeFinder from "../../utils/sizeFinder";
import './CommunitySwitching.scss'

function App () {
  const[modalActive, setModalActive] = useState(false);
  return (
    <>
      {modalActive && <CommunityModal setActive={setModalActive} />}
      <DashboardLayout title="All Communities">
        <AllCommunities setModalActive={setModalActive} />
      </DashboardLayout>
    </>
  )
}

export default App

function AllCommunities ({setModalActive}) {
  
  const [search, setSearch] = useState(null)

   const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const communitiesState = useSelector((state) => state.listCommunities);
  const {error, loading, communities} = communitiesState
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(!search) dispatch(listCommunities());
    if(search) dispatch(searchCommunities(search));
  }, [search, dispatch])
  return (
    <>
        <CommunityHeader setActive={setModalActive} search={search} setSearch={setSearch} />
        {communities.length > 0 && <CommunitiesCard data={communities} />}
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

const CommunityModal = ({setActive}) => {
  const [files, setFiles] = useState();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [userId, setUserId] = useState(0);
  console.log(name);
  return(
    <div className='collection-modal-container'>
        <div>
          <div className='collection-modal-inner-container'>
            <CollectionModalHeader title='Create Community' clickHandler={setActive} />
            <DragDrop files={files} onChange={setFiles} />
            <InputComponent name="Community Name" text={name} changeHandler={setName} />
            <InputComponent name="Description" text={desc} changeHandler={setDesc} />
            <InputComponent name="User Id" text={userId} changeHandler={setUserId} />
            <Button name="Create Community" />
          </div>
        </div>
      </div>
  )
}
