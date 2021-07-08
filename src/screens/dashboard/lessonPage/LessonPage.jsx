import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GET_LESSONS } from '../../../utils/urlConstants'
import useGetFetchData from '../../../utils/useGetFetchData'

import LessonDetail from './LessonDetail'
import BackButton from '../../../components/backButton/BackButton'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'

import './LessonPage.scss'

const LessonPage = () => {
  const { id } = useParams()
  const { data, error, isLoading } = useGetFetchData(
    'lessonData',
    GET_LESSONS + `/${id}`
  )
  if (isLoading) {
    return <span>Loading...</span>
  }

  return (
    <DashboardLayout title='Course page'>
      <BackButton location={'/course/' + data?.data?.courseId} />
      <LessonDetail data={data} id={id} />
      <MaterialComponent />
    </DashboardLayout>
  )
}

const document = [
  {
    id: 1,
    name: 'Finance document.pdf',
    img: '/img/pdf.svg'
  },
  {
    id: 2,
    name: 'Finance document.pdf',
    img: '/img/pdf.svg'
  },
  {
    id: 3,
    name: 'Finance document.pdf',
    img: '/img/pdf.svg'
  },
  {
    id: 4,
    name: 'Finance document.pdf',
    img: '/img/pdf.svg'
  },
  {
    id: 5,
    name: 'Finance document.pdf',
    img: '/img/pdf.svg'
  },
  {
    id: 6,
    name: 'Finance document.pdf',
    img: '/img/pdf.svg'
  }
]

const MaterialComponent = () => {
  return (
    <div className='material-wrapper'>
      <div className='material-header'>
        <h4>Materials</h4>
        <div className='download-all'>
          <img src='/img/download-icon.svg' alt='download icon' />
          <h4>Donwload all files</h4>
        </div>
      </div>
      <div className='document-wrapper'>
        {document.map((item, index) => {
          return <Document item={item} key={index} />
        })}
      </div>
    </div>
  )
}

const Document = ({ item }) => {
  const [active, setActive] = useState(item.id)
  const [dropDownItem, setDropDownItem] = useState(0)

  function dropItem (num) {
    setDropDownItem((prev) => {
      if (prev === num) num = 0
      return num
    })
  }

  return (
    <div className='document'>
      <img src={item.img} alt='document type' />
      <h4>{item.name}</h4>
      <img
        onClick={() => {
          dropItem(item.id)
        }}
        src='/img/more-horizontal.svg'
        alt='horizontal icon'
      />
      {active === dropDownItem && (
        <div key={item.id} className='document-download-toggle'>
          <div>
            <img src='/img/download-icon.svg' alt='download icon' />{' '}
            <span>Download</span>
          </div>
          <div>
            <img src='/img/book-outlined.svg' alt='library icon' />{' '}
            <span>Add to my library</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default LessonPage
