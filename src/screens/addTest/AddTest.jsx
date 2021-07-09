import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { createTest } from '../../actions/testActions'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './AddTest.scss'
import { InputFields} from '../../components/formUI/FormUI';
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const AddTest = () => {
  const { lessonId } = useParams()
  const { pathname } = useLocation()

  const history = useHistory()
  const [questionError, setQuestionError] = useState(false)
  const [formError, setFormError] = useState(false)

  const [newQuestions, setNewQuestions] = useState([])
  const [questions, setQuestions] = useState([])
  // data structure of questions
  // [{
  //   question: "",
  //   answer: "",
  //   options: []
  // }]

  const dispatch = useDispatch()

  useEffect(() => {
    if(pathname === `/admin/edit-test/${lessonId}`) getLessonQuestions()
  }, [])

  async function getLessonQuestions () {
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/questions/lesson/${lessonId}`);
    setNewQuestions(data.questions)
    setQuestions(data.questions)
    console.log(data.questions);
  }

  function addQuestion () {
    setQuestions(prev => [...prev, { question: '', answer: '', options: [] }])
    setFormError(false)
  }

  function resetQuestion () {
    setQuestions([])
    setFormError(false)
  }

  function addTest () {
    if (questions.length > 0) {
      if (checkArrayForFilledValue(questions)) {
        dispatch(createTest(lessonId, questions))
        history.goBack()
      } else {
        setFormError(true)
      }
    }
    setFormError(true)
  }

  function checkArrayForFilledValue (arr) {
    let empty = 0;
    arr.forEach(el => {
      if(!el.question || !el.answer || el.options.includes('')) {
        empty++
      }
    })

    if(empty > 0) {
      return false;
    } else {
      return true;
    }
  }

  function editTest () {
    console.log(questions);
  }
  // function editTest () {
  //   // if (questions.length > 0) {
  //   //   if (questions.question && questions.answer && !questions.options.includes('')) {
        
  //   //   }
  //   // }
  //   // setFormError(true)
  //   console.log(questions);
  // }

  return (
    <DashboardLayout title='Add Test'>
      <div>
        <div className='add-test-container'>
          <div>
            <div className='add-test-inner-container'>
              {/* {questions.length > 0 && questions.map((index, item) => <QuestionAnswerComponent pos={questions.length - 1} index={index} questions={questions} questionError={questionError} />)} */}
              {questions.length > 0 && questions.map((item, index) => <QuestionAnswerComponent 
              pos={questions.length - 1} 
              index={index} 
              questions={questions} 
              questionError={questionError} 
              newQuestions={newQuestions} 
              setFormError={setFormError}
              formError={formError}
              />)}

              <button onClick={() => addQuestion()} className='secondary-btn add-question-btn'><img src='/img/plus.svg' alt='add icon' /><span>Add question</span></button>
              <div className='btn-container'>
              <button className='secondary-btn reset-test-btn' onClick={resetQuestion}>Reset test</button>
              {pathname === `/admin/add-test/${lessonId}` 
              ? <button className='secondary-btn color-primary' onClick={(addTest)}>Add test</button>
              : <button className='secondary-btn color-primary' onClick={(editTest)}>Edit test</button>
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

function QuestionAnswerComponent ({ pos, questions, index, newQuestions, setFormError, formError }) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [options, setOptions] = useState([''])
  const [newOptions, setNewOptions] = useState([]);

  const { register: regi, handleSubmit, errors } = useForm()

  useEffect(() => {
    if(newQuestions.length > 0) {
        setQuestion(newQuestions[index].question)
        setAnswer(newQuestions[index].answer)
        setNewOptions(newQuestions[index].options)
        setOptions(newQuestions[index].options)
    }
  }, [newQuestions])

  function onQuestionChange (e) {
    setQuestion(e.target.value)
    setFormError(false)
  }

  function onAnswerChange (e) {
    setAnswer(e.target.value)
    setFormError(false)
  }

  function addOption () {
    setOptions(prev => {
      return [...prev, '']
    })
    setFormError(false)
  }

  questions[pos].question = question
  questions[pos].answer = answer
  questions[pos].options = options
  return (
    <div className='question-answer-container' key={index}>
      {formError && <p className="error-message test-error">Please fill out all the input.</p>}
      <div className='question-container'>
        <div>
            {/* <InputFields
              type='text'
              placeholder='Question'
              name='question'
              id='question'
            //   defaultValue={data && data.name}
              ref={regi({
                required: {
                  value: true,
                  message: 'You must enter the question.'
                }
              })}
              errors={errors}
            /> */}
            {/* {questionError && <p>Please enter the question.</p>} */}
          <input 
          className='default-input-variation' 
          placeholder='Question' 
          value={question} 
          onChange={(e) => onQuestionChange(e)} />
        </div>
        <button><img src='/img/green-camera.svg' alt='photo icon' /> <h4>Add photo</h4></button>
      </div>
      <div className='test-answers-wrapper'>
        <div className='test-correct-answer'>
          <h4>Write correct answer in this field</h4>
          <div className='test-answer-input-field'>
            <input className='default-input-variation' placeholder='Correct answer' value={answer} onChange={(e) => onAnswerChange(e)} />
            {/* <InputFields
              type='text'
              placeholder='Correct answer'
              name='correctAnswer'
              id='correctAnswer'
            //   defaultValue={data && data.name}
              ref={regi({
                required: {
                  value: true,
                  message: 'You must enter the name.'
                }
              })}
              errors={errors}
            /> */}

            <img src='/img/minus-circle-outline.svg' alt='minus image' onClick={() => setAnswer('')} />
          </div>
          <span>Answer will be mixed for users</span>
        </div>
        <div className='option-answers'>
          {options.length > 0 && options.map((item, index) => 
          <OptionAnswer 
          options={options} 
          pos={index} 
          setOptions={setOptions} 
          newOptions={newOptions} 
          item={item} 
          setFormError={setFormError}
          />)}
          <button onClick={addOption}><img src='/img/plus.svg' alt='add icon' /> <span>Add new answer</span></button>
        </div>
      </div>
    </div>
  )
}

function OptionAnswer ({ options, setOptions, item, pos, newOptions, setFormError }) {
  const [answer, setAnswer] = useState('')
    const { register: regi, handleSubmit, errors } = useForm()
  function onAnswerChange (e) {
    setAnswer(e.target.value)
    setFormError(false)
  }

  //  function addOption() {
  //     setOptions(prev => {
  //       if(prev === '') {
  //         return [...prev]
  //       }
  //       return [...prev, '']
  //     })
  //   }
  useEffect(() => {
    // if(options.includes('')) {
    //   options.splice(-1, 1)
    // }
    // if(answer.length ) {
    //   addOption()
    // }

    if(newOptions.length > 0) {
        setAnswer(newOptions[pos])
    }
  }, [newOptions])

  function removeItem (id) {
    const newOptions = [...options]
    const index = newOptions.indexOf(id)
    console.log(index)
    if (index !== -1) {
      newOptions.splice(index, 1)
      setOptions(newOptions)
    }
  }

  options[pos] = answer
  
  return (
    <div className='test-answer-input-field' key={pos}>
      <input className='default-input-variation incorrect-option' 
      placeholder='Incorrect answer' value={answer} onChange={(e) => onAnswerChange(e)} />
      {/* <InputFields
              type='text'
              placeholder='Incorrect answer'
              name='incorrectAnswer'
              id='incorrectAnswer'
            //   defaultValue={data && data.name}
              ref={regi({
                required: {
                  value: true,
                  message: 'You must enter the name.'
                }
              })}
              errors={errors}
            /> */}
      <img src='/img/minus-circle-outline.svg' alt='minus image' onClick={() => removeItem(item)} />
    </div>
  )
}

export default AddTest
