import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MATERIAL } from '../../../utils/urlConstants'
import { useSelector } from 'react-redux'

import useGetLessonData from '../../../utils/useGetLessonData'
import LessonDetail from './LessonDetail'
import BackButton from '../../../components/backButton/BackButton'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import Material from '../../../components/material/Material'

import './LessonPage.scss'

const LessonPage = () => {
  const [materialData, setMaterialData] = useState([])
  const [path, setPath] = useState('')
  const { id } = useParams()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const userId = userInfo.id

  const { isLoading, data } = useGetLessonData(
    id,
    setMaterialData,
    userId,
    setPath
  )

  return (
    <>
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <DashboardLayout title='Course page'>
          <BackButton location={path} />
          <LessonDetail data={data?.data} id={id} />
          <div className='admin-lesson-materials-container'>
            <h1>Materials</h1>
            <div className='material'>
              {materialData.map((mater) => {
                return (
                  <Material key={mater.id} name={mater?.name}>
                    <a
                      href={`${MATERIAL}${mater?.material}`}
                      download={mater.name}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <div>
                        <img src='/img/download-icon.svg' alt='download icon' />{' '}
                        <span>Download</span>
                      </div>
                    </a>

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
      )}
    </>
  )
}

export default React.memo(LessonPage)
