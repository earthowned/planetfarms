import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { categoryDelete, categoryUpdate, createCategory, listCategories } from '../../actions/categoryActions'
import BackButton from '../../components/backButton/BackButton'
import Button from '../../components/button/Button'
import { InputFields } from '../../components/formUI/FormUI'
import CollectionModalHeader from '../../components/newsCreateModal/CollectionModalHeader'
import Table from '../../components/table/Table'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './Category.scss'
import CheckPermit from '../../utils/checkPermit.jsx'
import { getApi } from '../../utils/apiFunc'

const Category = () => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [addModal, setAddModal] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [editId, setEditId] = useState(null)
  const [data, setData] = useState(null)

  const { loading, categories } = useSelector(state => state.listCategories)
  const { success } = useSelector(state => state.addCategory)
  const { success: deleteSuccess } = useSelector(state => state.categoryDelete)
  const { success: updateSuccess } = useSelector(state => state.categoryUpdate)

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listCategories())
  }, [success, deleteSuccess, updateSuccess])

  const confirmDelete = async () => {
    dispatch(categoryDelete(deleteId))
    setDeleteModal(false)
  }

  const deleteModalFunc = (id) => {
    setDeleteId(id)
    setDeleteModal(true)
  }

  const editModalFunc = async (id) => {
    setEditId(id)
    const { data } = await getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/categories/${id}`)
    setData(data.results)
    setEditModal(true)
  }

  return (
    <>
      {deleteModal && <CategoryDelete setDeleteModal={setDeleteModal} confirmDelete={confirmDelete} />}
      {editModal && <CategoryForm data={data} editId={editId} setData={setData} setEditModal={setEditModal} setAddModal={setAddModal} />}
      {addModal && <CategoryForm setData={setData} setEditModal={setEditModal} setAddModal={setAddModal} />}
      <DashboardLayout title='category'>
        <div className='category__header'>
          <BackButton onClick={() => history.goBack()} />
          <Button name='Add Category' onClick={() => setAddModal(true)} />
        </div>
        {loading
          ? <h4 style={{ color: '#fff' }}>Loading ... </h4>
          : <Table
              addSymbolNumber
              options={
                [{
                  img: '/img/edit-icon.svg',
                  action: editModalFunc
                },
                {
                  img: '/img/trash-icon.svg',
                  action: deleteModalFunc
                }]
              }
              data={{
                tblHeader: ['Name'],
                tblData: categories,
                tblProperty: ['name']
              }}
            />}
      </DashboardLayout>
    </>
  )
}

const CategoryDelete = ({ setDeleteModal, confirmDelete }) => {
  return (
    <div className='simple-modal-container'>
      <div className='simple-modal-inner-container'>
        <div>
          <h4>Are you sure you want to delete?</h4>
        </div>
        <div>
          <button className='secondary-btn' onClick={confirmDelete}>Confirm</button>
          <button className='secondary-btn' onClick={() => setDeleteModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

const CategoryForm = ({ data, editId, setData, setEditModal, setAddModal }) => {
  const { register: regi, errors, handleSubmit } = useForm()
  const { error, loading } = useSelector(state => state.addCategory)
  const { error: updateError, loading: updateLoading } = useSelector(state => state.categoryUpdate)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()
  function clearInput () {
    setData(null)
    setEditModal(false)
    setAddModal(false)
    setErrorMessage('')
  }

  async function addCategory ({ name }) {
    if (name) {
      dispatch(createCategory({ name }))
    }
    if (error) {
      setErrorMessage(error)
    } else {
      setAddModal(false)
    }
  }

  async function updateCategory ({ name }) {
    if (name) {
      dispatch(categoryUpdate({ name, id: editId }))
    }
    if (updateError) {
      setErrorMessage(updateError)
    } else {
      setEditModal(false)
    }
  }

  return (
    <div className='simple-modal-container'>
      <div>
        <div className='collection-modal-inner-container'>
          <CollectionModalHeader title={data ? 'Update Category' : 'Create Category'} clickHandler={clearInput} />
          <form onSubmit={data ? handleSubmit(updateCategory) : handleSubmit(addCategory)}>
            {loading || updateLoading
              ? <h4 style={{ color: '#fff' }}>Sending...</h4>
              : errorMessage
                ? <div className='error-header'>
                  <div className='error'>{errorMessage}</div>
                  </div>
                : <div />}
            <InputFields
              type='text'
              placeholder='category name'
              name='name'
              id='name'
              defaultValue={data && data.name}
              ref={regi({
                required: {
                  value: true,
                  message: 'Category name is required.'
                }
              })}
              errors={errors}
            />
            {data
              ? <button className='primary-btn category-btn' type='submit'>Update Category</button>
              : <button className='primary-btn category-btn' type='submit'>Create Category</button>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default CheckPermit(Category, `${process.env.REACT_APP_API_BASE_URL}/api/categories`)
