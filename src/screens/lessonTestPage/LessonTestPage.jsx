import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { listTestQuestions } from '../../actions/testActions'
import BackButton from '../../components/backButton/BackButton'
import Radiobox from '../../components/radioBox/Radiobox'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './LessonTestPage.scss'

const LessonTestPage = () => {
  const { testId } = useParams()
  const { title } = useParams()
  const { id } = useParams()
  const history = useHistory()
  const { questions = [] } = useSelector((state) => state.listTestQuestions)
  const dispatch = useDispatch()
  const [choices, setChoices] = useState([])
  const [modalActive, setModalActive] = useState(false)
  const [messageModal, setMessageModal] = useState(false)
  const [completeMessage, setCompleteMessage] = useState('')
  const [lessonId, setLessonId] = useState()
  const lessonTitle = title.split('-').join(' ')
  useEffect(() => {
    if (!questions.length) dispatch(listTestQuestions(testId))
    if (completeMessage) setMessageModal(true)

    setLessonId(id)
  }, [completeMessage])

  const submitTest = async () => {
    const currentDate = moment().toDate().getTime().toString()
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/api/user_tests/${testId}`,
      { endTime: currentDate, choices }
    )

    if (data) {
      setCompleteMessage(data.message)
    }
  }

  const goToLesson = () => {
    setCompleteMessage('')
    setMessageModal(false)
    history.push(`/lesson/${lessonId}`)
  }

  return (
    <>
      {modalActive && (
        <div className='simple-modal-container'>
          <div className='simple-modal-inner-container'>
            <h3>Are you sure you want to terminate test?</h3>
            <div>
              <button className='secondary-btn' onClick={() => goToLesson()}>
                Terminate
              </button>
              <button
                className='secondary-btn'
                onClick={() => setModalActive(false)}
              >
                Back to Test
              </button>
            </div>
          </div>
        </div>
      )}
      {messageModal && (
        <div className='simple-modal-container'>
          <div className='simple-modal-inner-container'>
            <h3>{completeMessage}</h3>
            <div>
              <button className='secondary-btn' onClick={() => goToLesson()}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
      <DashboardLayout title='Course Page'>
        <div className='course-page'>
          <div className='course-page-flex-col-4'>
            <div onClick={() => setModalActive(true)}>
              <BackButton />
            </div>
            <div className='test-wrapper'>
              <h1>Test for {lessonTitle}</h1>
              {questions.length !== 0 ? (
                questions.map((data, index) => {
                  if (data.type === 'subjective') {
                    return (
                      <SubjectiveQuestion
                        data={data}
                        count={index + 1}
                        pos={index}
                        setChoices={setChoices}
                        key={index}
                      />
                    )
                  } else {
                    return (
                      <MCQTestQuestion
                        data={data}
                        count={index + 1}
                        pos={index}
                        setChoices={setChoices}
                        key={index}
                      />
                    )
                  }
                })
              ) : (
                <h4>No Tests available</h4>
              )}
              <div className='test-btn-container'>
                <button className='default-btn' onClick={submitTest}>
                  Finish Test
                </button>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

const SubjectiveQuestion = ({ data, count, pos, setChoices }) => {
  const [answer, setAnswer] = useState('')
  setChoices(answer)
  return (
    <div className='question-wrapper' key={count}>
      <h4>Question {count}.</h4>
      <h4>{data.question}</h4>
      <div className='answer-options-container'>
        <textarea
          onChange={(e) => setAnswer(e.target.value)}
          row='10'
          col='4'
        />
      </div>
    </div>
  )
}

const MCQTestQuestion = ({ data, count, pos, setChoices }) => {
  const [selected, setSelected] = useState('')
  setChoices(selected)

  return (
    <div className='question-wrapper' key={count}>
      <h4>Question {count}.</h4>
      <h4>{data.question}</h4>
      <div className='answer-options-container'>
        {data.options.map((item) => {
          return (
            <label class='answer-options' key={item}>
              <Radiobox
                text={item}
                selected={selected}
                onChange={setSelected}
                value={item}
              />
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default LessonTestPage
