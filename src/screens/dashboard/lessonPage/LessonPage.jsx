import { useParams } from 'react-router-dom'
import { GET_LESSONS } from '../../../utils/urlConstants'
import useGetFetchData from '../../../utils/useGetFetchData'

import LessonDetail from './LessonDetail'
import BackButton from '../../../components/backButton/BackButton'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import Material from '../../../components/material/Material'

import './LessonPage.scss'

const LessonPage = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetFetchData(
    'lessonData',
    GET_LESSONS + `/${id}`
  )
  if (isLoading) {
    return <span>Loading...</span>
  }

  const materialData = data?.data?.materials

  return (
    <DashboardLayout title='Course page'>
      <BackButton location={'/course/' + data?.data?.courseId} />
      <LessonDetail data={data?.data} id={id} />
      {materialData.length !== 0 ? (
        <div className='admin-lesson-materials-container'>
          <h1>Materials</h1>
          <div className='material'>
            {materialData.map((mater) => {
              return <Material key={mater.id} name={mater?.name} />
            })}
          </div>
        </div>
      ) : (
        ''
      )}
    </DashboardLayout>
  )
}

export default LessonPage
