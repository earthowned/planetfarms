import { useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { createTest, updateTestQuestion } from '../../actions/testActions'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './AddTest.scss'
import { useHistory } from 'react-router-dom'
import { checkArrayForFilledValue } from '../../utils/checkFilledArray'
import { v4 as uuidv4 } from 'uuid'
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { Card } from "./Card";
import { useDrag, useDrop } from 'react-dnd'
import update from 'immutability-helper'
import axios from 'axios'
import { deleteSingleQuestion } from '../../actions/questionActions'
import BackButton from '../../components/backButton/BackButton'

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
      const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/questions/lesson/${lessonId}`)
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
    setQuestions((cur) => [
      ...cur,
      { id, type: 'subjective', question: '' }
    ])
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
    // console.log(deleteId)
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
        const { data } = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/tests/${editQuestions[0].testId}`, { questions: editQuestions })
        if (data) document.location.href = `/admin/edit-test/${lessonId}`
      }
    }
    setFormError(true)
  }

  function orderQuestions () {
    const newQuestions = []

    cards.forEach(el => {
      if (el.type === 'mcq') {
        const newObj = {
          id: questions[questions.findIndex(item => item.id === el.id)].id,
          question: questions[questions.findIndex(item => item.id === el.id)].question,
          answer: questions[questions.findIndex(item => item.id === el.id)].answer,
          options: questions[questions.findIndex(item => item.id === el.id)].options,
          testId: questions[questions.findIndex(item => item.id === el.id)].testId,
          type: 'mcq'
        }
        newQuestions.push(newObj)
      } else {
        const newObj = {
          id: questions[questions.findIndex(item => item.id === el.id)].id,
          question: questions[questions.findIndex(item => item.id === el.id)].question,
          testId: questions[questions.findIndex(item => item.id === el.id)].testId,
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
      <DeleteQuestionModal confirmDelete={confirmDelete} setDeleteModal={setDeleteModal} deleteModal={deleteModal} />
      <DashboardLayout title='Add Test'>
        <BackButton onClick={() => history.goBack()} />
        <div div className='add-test-container'>{cards.map((card, i) => renderCard(card, i))}</div>
        <div className='questions-btn-container'>
          <button onClick={addMCQQuestion} className='secondary-btn add-question-btn'><img src='/img/plus.svg' alt='add icon' /><span>Add Objective Question</span></button>
          <button onClick={addSubjectiveQuestion} className='secondary-btn add-question-btn'><img src='/img/plus.svg' alt='add icon' /><span>Add Subjective Question</span></button>
        </div>
        <div className='questions-btn-container'>
          <button className='secondary-btn reset-test-btn' onClick={resetQuestion}>Reset test</button>
          {
                pathname === `/admin/edit-test/${lessonId}`
                  ? <button className='secondary-btn color-primary' onClick={editTest}>Edit test</button>
                  : <button className='secondary-btn color-primary' onClick={submitQuestion}>Add test</button>
                }
        </div>
      </DashboardLayout>
    </>
  )
}

const DeleteQuestionModal = ({ confirmDelete, setDeleteModal, deleteModal }) => {
  return (
    <>
      {deleteModal && <div className='simple-modal-container'>
        <div className='simple-modal-inner-container'>
          <div>
            <h4>Are you sure you want to delete?</h4>
          </div>
          <div>
            <button className='secondary-btn' onClick={confirmDelete}>Confirm</button>
            <button className='secondary-btn' onClick={() => setDeleteModal(false)}>Cancel</button>
          </div>
        </div>
      </div>}
    </>
  )
}

const ItemTypes = {
  CARD: 'card'
}

const style2 = {
  border: '.5px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  borderRadius: '4px',
  cursor: 'move'
}

const Card = ({
  id, type, index, moveCard, questions, setQuestions,
  formError, setFormError, setOptions, options,
  cards, setCards, deleteQuestion, newQuestions
}) => {
  const ref = useRef(null)
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect (monitor) {
      return {
        handlerId: monitor.getHandlerId()
      }
    },
    hover (item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    }
  })
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })
  // const opacity = isDragging ? 0 : 1;
  const background = isDragging ? '#00C688' : ''
  drag(drop(ref))
  return (
    <div ref={ref} style={{ ...style2, background }} data-handler-id={handlerId}>
      <div className='question-answer-container'>
        {type === 'mcq' ? (
          <MCQQuestion
            questions={questions}
            setQuestions={setQuestions}
            id={id}
            formError={formError}
            setFormError={setFormError}
            options={options}
            setOptions={setOptions}
            cards={cards}
            setCards={setCards}
            deleteQuestion={deleteQuestion}
            newQuestions={newQuestions}
          />
        ) : (
          <SubjectiveQuestion
            questions={questions}
            setQuestions={setQuestions}
            id={id}
            formError={formError}
            setFormError={setFormError}
            cards={cards}
            setCards={setCards}
            deleteQuestion={deleteQuestion}
            newQuestions={newQuestions}
          />
        )}
      </div>
    </div>
  )
}

function SubjectiveQuestion ({ questions, setQuestions, id, formError, setFormError, cards, setCards, deleteQuestion, newQuestions }) {
  const [question, setQuestion] = useState('')
  const [isDisable, setIsDisable] = useState(false)
  const [testId, setTestId] = useState(null)

  function changeQuestion (e) {
    setQuestion(e.target.value)
    questions[questions.findIndex((el) => el.id === id)].question =
      e.target.value
    setFormError(false)
  }

  useEffect(() => {
    if (newQuestions.length > 0) {
      setQuestion(questions[questions.findIndex((el) => el.id === id)].question)
      setTestId(questions[questions.findIndex((el) => el.id === id)].testId)
      if (questions[questions.findIndex((el) => el.id === id)].testId) {
        setIsDisable(true)
      }
    }
  }, [newQuestions])

  useEffect(() => {
    if (questions.length) {
      setQuestion(questions[questions.findIndex((el) => el.id === id)].question)
    }
  }, [cards])

  const removeQuestion = () => {
    // for questions
    const removed = questions.splice(questions.findIndex((el) => el.id === id), 1)
    const newQuestions = questions.filter(item => item.id !== removed.id)
    setQuestions(newQuestions)
    // for cards
    const removedCard = cards.splice(cards.findIndex((el) => el.id === id), 1)
    const newCards = cards.filter(item => item.id !== removedCard.id)
    setCards(newCards)
  }

  return (
    <>
      {formError && <p className='error-message test-error'>Please fill out all the input.</p>}
      <div className='question-header'>
        <h4 className='question-title'>Subjective Question</h4>
        {
           !testId
             ? <img src='/img/minus-circle-outline.svg' alt='minus image' onClick={removeQuestion} />
             : <img
                 src='/img/minus-circle-outline.svg' alt='minus image'
                 onClick={() => deleteQuestion(questions[questions.findIndex((el) => el.id === id)].id)}
               />
      }
      </div>
      <div className='question-container'>
        <div>
          <input
            value={question}
            onChange={(e) => changeQuestion(e)}
            className='default-input-variation'
            placeholder='Question'
            disabled={isDisable}
          />
        </div>
      </div>
    </>
  )
}

function MCQQuestion ({ id, questions, setQuestions, formError, setFormError, cards, setCards, deleteQuestion, newQuestions }) {
  const [options, setOptions] = useState([''])
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [newOptions, setNewOptions] = useState([''])
  const { lessonId } = useParams()
  const { pathname } = useLocation()
  const [testId, setTestId] = useState(null)

  function changeQuestion (e) {
    setQuestion(e.target.value)
    questions[questions.findIndex((el) => el.id === id)].question =
      e.target.value
    setFormError(false)
  }

  function changeAnswer (e) {
    setAnswer(e.target.value)
    questions[questions.findIndex((el) => el.id === id)].answer =
      e.target.value
    setFormError(false)
  }

  function addQuestion () {
    setOptions((cur) => [...cur, ''])
    questions[questions.findIndex((el) => el.id === id)].options.push('')
    setFormError(false)
  }

  useEffect(() => {
    if (pathname === `/admin/add-test/${lessonId}`) {
      setOptions(questions[questions.findIndex((el) => el.id === id)].options)
      setTestId(questions[questions.findIndex((el) => el.id === id)].testId)
    } else {
      if (newQuestions.length) {
        setQuestion(questions[questions.findIndex((el) => el.id === id)].question)
        setAnswer(questions[questions.findIndex((el) => el.id === id)].answer)
        setOptions(questions[questions.findIndex((el) => el.id === id)].options)
        setTestId(questions[questions.findIndex((el) => el.id === id)].testId)
      }
    }
  }, [newQuestions, options])

  // update on card change
  useEffect(() => {
    if (questions.length) {
      setQuestion(questions[questions.findIndex((el) => el.id === id)].question)
      setAnswer(questions[questions.findIndex((el) => el.id === id)].answer)
      setOptions(questions[questions.findIndex((el) => el.id === id)].options)
    }
  }, [cards])

  const removeQuestion = () => {
    // for questions
    const removed = questions.splice(questions.findIndex((el) => el.id === id), 1)
    const newQuestions = questions.filter(item => item.id !== removed.id)
    setQuestions(newQuestions)
    // for cards
    const removedCard = cards.splice(cards.findIndex((el) => el.id === id), 1)
    const newCards = cards.filter(item => item.id !== removedCard.id)
    setCards(newCards)
  }

  return (
    <>
      {formError && <p className='error-message test-error'>Please fill out all the input.</p>}
      <div className='question-header'>
        <h4 className='question-title'>Objective Question</h4>
        {
           !testId
             ? <img src='/img/minus-circle-outline.svg' alt='minus image' onClick={removeQuestion} />
             : <img
                 src='/img/minus-circle-outline.svg' alt='minus image'
                 onClick={() => deleteQuestion(questions[questions.findIndex((el) => el.id === id)].id)}
               />
      }
      </div>
      <div className='question-container'>
        <div>
          <input
            className='default-input-variation'
            placeholder='Question'
            value={question}
            onChange={(e) => changeQuestion(e)}
          />
        </div>
        <button><img src='/img/green-camera.svg' alt='photo icon' /> <h4>Add photo</h4></button>
      </div>
      <div className='test-answers-wrapper'>
        <div className='test-correct-answer'>
          <h4>Write correct answer in this field</h4>
          <div className='test-answer-input-field'>
            <input
              className='default-input-variation'
              placeholder='Correct answer'
              value={answer}
              onChange={(e) => changeAnswer(e)}
            />
          </div>
          <span>Answer will be mixed for users</span>
        </div>
        <div className='option-answers'>
          {options.length > 0 && options.map((item, index) =>
            <InputComponent
              index={index}
              questions={questions} id={id}
              setFormError={setFormError}
              options={options}
              setOptions={setOptions}
              newOptions={newOptions}
              setNewOptions={setNewOptions}
              item={item}
              newQuestions={newQuestions}
            />

          )}
        </div>
        <button
          className='add-new-course'
          onClick={addQuestion}
        ><img src='/img/plus.svg' alt='add icon' />
          <span>Add new answer</span>
        </button>
      </div>
    </>
  )
}

function InputComponent ({ index, questions, id, setFormError, options, setOptions, newOptions, setNewOptions }) {
  const [question, setQuestion] = useState('')

  function onQuestionChange (e) {
    setQuestion(e.target.value)
    questions[questions.findIndex((el) => el.id === id)].options[index] =
      e.target.value
    options[index] = e.target.value
    setFormError(false)
  }

  function removeItem () {
    const removedItem = options.splice(index, 1)
    const newItems = options.filter((el) => el !== removedItem)
    setOptions(newItems)
  }

  useEffect(() => {
    if (options.length > 0) {
      setQuestion(options[index])
      if (questions.length) {
        questions[questions.findIndex((el) => el.id === id)].options = options
      }
    }
  }, [options])

  return (
    <div className='test-answer-input-field' key={index}>
      <input
        className='default-input-variation incorrect-option'
        placeholder='Incorrect answer'
        value={question}
        onChange={(e) => onQuestionChange(e)}
      />
      {
            options.length === 1
              ? <img src='/img/minus-circle-outline.svg' alt='minus image' />
              : <img src='/img/minus-circle-outline.svg' alt='minus image' onClick={removeItem} />
            }
    </div>
  )
}

export default AddTest
