import { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
  useLocation,
  useParams
} from 'react-router-dom/cjs/react-router-dom.min'
import { createTest, updateTestQuestion } from '../../actions/testActions'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './AddTest.scss'
import { useHistory } from 'react-router-dom'
import { checkArrayForFilledValue } from '../../utils/checkFilledArray'
import { v4 as uuidv4 } from 'uuid'
import update from 'immutability-helper'
import axios from 'axios'
import { deleteSingleQuestion } from '../../actions/questionActions'
import BackButton from '../../components/backButton/BackButton'
import DeleteQuestionModal from './DeleteQuestionModal'
import Card from './Card'

const AddTest = () => {
  const [cards, setCards] = useState([])
  const [questions, setQuestions] = useState([])
  const [newQuestions, setNewQuestions] = useState([])
  const [formError, setFormError] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteId, setDeleteId] = useState()

  const { lessonId } = useParams()
  const { pathname } = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (pathname === `/admin/edit-test/${lessonId}`) getLessonQuestions()
  }, [])

  async function getLessonQuestions () {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/questions/lesson/${lessonId}`
      )
      if (data) {
        setCards(data.questions)
        setQuestions(data.questions)
        setNewQuestions(data.questions)
      }
    } catch (error) {
      setFormError(true)
    }
  }

  function addMCQQuestion () {
    const id = uuidv4()
    setQuestions((cur) => [
      ...cur,
      { id, type: 'mcq', question: '', options: [''], answer: '' }
    ])
    setCards((cur) => [...cur, { id, type: 'mcq' }])
  }

  function addSubjectiveQuestion () {
    const id = uuidv4()
    setQuestions((cur) => [...cur, { id, type: 'subjective', question: '' }])
    setCards((cur) => [...cur, { id, type: 'subjective' }])
  }

  function resetQuestion () {
    if (pathname === `/admin/edit-test/${lessonId}`) {
      setQuestions(newQuestions)
      setCards(newQuestions)
    } else {
      setQuestions([])
      setCards([])
    }
    setFormError(false)
  }

  function submitQuestion () {
    if (questions.length > 0) {
      if (checkArrayForFilledValue(questions)) {
        const newQuestions = orderQuestions()
        console.log(newQuestions)
        dispatch(createTest(lessonId, newQuestions))
        return history.goBack()
      }
    } else {
      setFormError(true)
    }
  }

  const confirmDelete = async () => {
    dispatch(deleteSingleQuestion({ deleteId, lessonId }))
    setDeleteModal(false)
  }

  const deleteQuestion = (id) => {
    setDeleteId(id)
    setDeleteModal(true)
  }

  async function editTest () {
    if (questions.length > 0) {
      if (checkArrayForFilledValue(questions)) {
        const editQuestions = orderQuestions()
        const { data } = await axios.put(
          `${process.env.REACT_APP_API_BASE_URL}/api/tests/${editQuestions[0].testId}`,
          { questions: editQuestions }
        )
        if (data) document.location.href = `/admin/edit-test/${lessonId}`
      }
    }
    setFormError(true)
  }

  function orderQuestions () {
    const newQuestions = []

    cards.forEach((el) => {
      if (el.type === 'mcq') {
        const newObj = {
          id: questions[questions.findIndex((item) => item.id === el.id)].id,
          question:
            questions[questions.findIndex((item) => item.id === el.id)]
              .question,
          answer:
            questions[questions.findIndex((item) => item.id === el.id)].answer,
          options:
            questions[questions.findIndex((item) => item.id === el.id)].options,
          testId:
            questions[questions.findIndex((item) => item.id === el.id)].testId,
          type: 'mcq'
        }
        newQuestions.push(newObj)
      } else {
        const newObj = {
          id: questions[questions.findIndex((item) => item.id === el.id)].id,
          question:
            questions[questions.findIndex((item) => item.id === el.id)]
              .question,
          testId:
            questions[questions.findIndex((item) => item.id === el.id)].testId,
          type: 'subjective'
        }
        newQuestions.push(newObj)
      }
    })

    return newQuestions
  }
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex]
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard]
          ]
        })
      )
    },
    [cards]
  )
  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        type={card.type}
        moveCard={moveCard}
        setQuestions={setQuestions}
        questions={questions}
        newQuestions={newQuestions}
        formError={formError}
        setFormError={setFormError}
        cards={cards}
        setCards={setCards}
        deleteQuestion={deleteQuestion}
      />
    )
  }
  return (
    <>
      <DeleteQuestionModal
        confirmDelete={confirmDelete}
        setDeleteModal={setDeleteModal}
        deleteModal={deleteModal}
      />
      <DashboardLayout title='Add Test'>
        <BackButton onClick={() => history.goBack()} />
        <div className='add-test-container'>
          {cards.map((card, i) => renderCard(card, i))}
        </div>
        <div className='questions-btn-container'>
          <button
            onClick={addMCQQuestion}
            className='secondary-btn add-question-btn'
          >
            <img src='/img/plus.svg' alt='add icon' />
            <span>Add Objective Question</span>
          </button>
          <button
            onClick={addSubjectiveQuestion}
            className='secondary-btn add-question-btn'
          >
            <img src='/img/plus.svg' alt='add icon' />
            <span>Add Subjective Question</span>
          </button>
        </div>
        <div className='questions-btn-container'>
          <button
            className='secondary-btn reset-test-btn'
            onClick={resetQuestion}
          >
            Reset test
          </button>
          {pathname === `/admin/edit-test/${lessonId}` ? (
            <button className='secondary-btn color-primary' onClick={editTest}>
              Edit test
            </button>
          ) : (
            <button
              className='secondary-btn color-primary'
              onClick={submitQuestion}
            >
              Add test
            </button>
          )}
        </div>
      </DashboardLayout>
    </>
  )
}

export default AddTest
