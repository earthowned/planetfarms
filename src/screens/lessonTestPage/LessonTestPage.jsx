import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { listTestQuestions } from '../../actions/testActions'
import BackButton from '../../components/backButton/BackButton'
import Button from '../../components/button/Button'
import Radiobox from '../../components/radioBox/Radiobox'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './LessonTestPage.scss'

// const tests = [
//   {
//     question: 'How many hours you need to spent for your business per day?',
//     options: ['8 hours', '4 hours', '2 hours', '1 hours']
//   },
//   {
//     question: 'What does this symbol means?',
//     // image: '/img/euro-symbol.svg',
//     options: ['Dollar', 'Euro', 'Ruble', 'krona']
//   },
//   {
//     question: 'How many hours you need to spent for your business per day?',
//     options: ['8 hours', '4 hours', '2 hours', '1 hours']
//   },
//   {
//     question: 'How many hours you need to spent for your business per day?',
//     type: 'multiple',
//     options: ['8 hours', '4 hours', '2 hours', '1 hours']
//   }
// ]
const LessonTestPage = () => {
  const {lessonId} = useParams()
  const {questions=[]} = useSelector(state => state.listTestQuestions)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(listTestQuestions(lessonId));
  }, [])
  return (
    <DashboardLayout title='Course Page'>
      <div className='course-page'>
        <div className='course-page-flex-col-4'>
          <BackButton location={`/lesson/${lessonId}`} />
          <div className='test-wrapper'>
            <h1>Test for lesson 1</h1>
            {
               questions.length > 1 
               ? questions.map((data, index) => <TestQuestion data={data} count={index + 1} />)
               : <h4>No Tests available</h4>
            }
            <div className='test-btn-container'>
              <Button name='Finish test' />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

const TestQuestion = ({ data, count }) => {
  return (
    <div className='question-wrapper' key={count}>
      <h4>Question {count}.</h4>
      <h4>{data.question}</h4>
      {/* {data.image && <img src={data.image} alt={data.question} />} */}
      <div className='answer-options-container'>
        {
          data.options.map(item => {
            return (
              <label class='answer-options' key={item}>
                <Radiobox />
                <span>{item}</span>
              </label>
            )
          })
        }
      </div>
    </div>
  )
}

export default LessonTestPage
