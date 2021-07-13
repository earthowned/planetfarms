import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useQuery } from 'react-query'

import { GET_LESSONS, Axios } from '../../../utils/urlConstants'

import LessonDetail from './LessonDetail'
import BackButton from '../../../components/backButton/BackButton'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import Material from '../../../components/material/Material'

import './LessonPage.scss'

const LessonPage = () => {
  const [materialData, setMaterialData] = useState([])
  const { id } = useParams()
  const history = useHistory()

  const { isLoading, data } = useQuery('lessonData', async () => {
    const { data } = await Axios.get(GET_LESSONS + `/${id}`)
    setMaterialData(data?.data?.materials)
    return data
  })
  const goToPreviousPath = () => {
    history.goBack()
  }

  return (
    <>
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <DashboardLayout title='Course page'>
          <BackButton onClick={goToPreviousPath} />
          <LessonDetail data={data?.data} id={id} />
          {materialData ? (
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
      )}
    </>
  )
}

export default React.memo(LessonPage)
