import { useParams } from 'react-router-dom'
import { saveAs } from 'file-saver'
import { GET_LESSONS, MATERIAL } from '../../../utils/urlConstants'
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

  const downloadFile = (url, name) => {
    console.log(url, name)
    const blob = new File([url], `${name}`)
    saveAs(blob)
  }
  return (
    <DashboardLayout title='Course page'>
      <BackButton location={'/course/' + data?.data?.courseId} />
      <LessonDetail data={data} id={id} />
      <div className='admin-lesson-materials-container'>
        <h1>Materials</h1>
        <div className='material'>
          {materialData.map((mater) => {
            console.log(mater)
            return (
              <Material key={mater.id} name={mater?.name}>
                <div
                  onClick={() =>
                    downloadFile(
                      `${MATERIAL}${mater?.material}`,
                      `${mater?.name}`
                    )}
                >
                  <img src='/img/download-icon.svg' alt='download icon' />{' '}
                  <span>Download</span>
                </div>

                <div>
                  <img src='/img/book-outlined.svg' alt='library icon' />{' '}
                  <span>Add to my library</span>
                </div>
              </Material>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default LessonPage
