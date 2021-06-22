import React, { useState, useEffect } from 'react'
import './Enterprises.css'
import SearchComponent from '../../components/searchComponent/SearchComponent'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import CommunityGroupCard from '../../components/communityGroupCard/CommunityGroupCard'
import { useSelector, useDispatch } from 'react-redux'
import { enterpriseDelete, listEnterprises, searchEnterprises } from '../../actions/enterpriseAction'
import FormModal from '../../components/formModal/FormModal'
import Filter from '../../components/filter/Filter'
import useSizeFinder from '../../utils/sizeFinder'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const nav = [
  {
    label: 'All enterprises',
    link: '/enterprises'
  },
  {
    label: 'Your Enterprises',
    link: '/your-enterprises'
  }
]

const Enterprise = () => {
  const data = useSelector((state) => state.listEnterprises.enterprises.enterprises)
  const {success: enterpriseUpdateSuccess} = useSelector((state) => state.enterpriseUpdate)
  const {success: enterpriseDeleteSuccess} = useSelector((state) => state.enterpriseDelete)
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [search, setSearch] = useState(null)
  const [active, setActive] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    if (search) dispatch(searchEnterprises(search))
    if (!search) dispatch(listEnterprises())
  }, [search, dispatch, enterpriseUpdateSuccess, enterpriseDeleteSuccess])

   // fetching current community
const currentCommunity = localStorage.getItem('currentCommunity')
  ? JSON.parse(localStorage.getItem('currentCommunity'))
  : null

  const editCard = async (id) => {
     const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/enterprises/${id}/community/${currentCommunity.id}`)
    setEditData(data)
    setActive(true);
  }

  const deleteCard = (id) => {
    setDeleteModal(true);
    setDeleteId(id);
  }

  const confirmDelete = () => {
    dispatch(enterpriseDelete(deleteId))
    setDeleteModal(false);
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
      <DashboardLayout title='Enterprises'>
        <div className='all-enterprises'>
          <div className='enterprises-col'>
            <EnterpriseHeader search={search} setSearch={setSearch} setActive={setActive} />
            <div className='enterpriseCard'>
              <CommunityGroupCard data={data} type="enterpise" editCard={editCard} deleteCard={deleteCard} />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

function EnterpriseHeader ({ search, setSearch, setActive }) {
  return (
    <div className='enterprises-row'>
      <div className='enterprises-header'>
        <FirstHeader />
        <SearchComponent className='search border-1px-onyx' search={search} setSearch={setSearch} />
      </div>
      <div className='create-enterprises-wrapper'>
        <div className='add-enterprises'>
          <div className='create-enterprise-text ibmplexsans-semi-bold-shark-16px' onClick={() => setActive(true)}>
            Create Enterprise
          </div>
        </div>
        <div className='enterprise-filter'>
          <Filter />
        </div>
      </div>
    </div>
  )
}

function FirstHeader () {
  const windowWidth = useSizeFinder()
  const { pathname } = useLocation()
  return (
    <>
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
    </>
  )
}

export default Enterprise
