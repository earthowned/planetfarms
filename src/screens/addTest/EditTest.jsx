import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './AddTest.scss'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { checkArrayForFilledValue } from '../../utils/checkFilledArray'
import { listQuestions, updateQuestion, deleteSingleQuestion } from '../../actions/questionActions'
import { updateTestQuestion } from '../../actions/testActions'

const EditTest = () => {
    const { lessonId } = useParams()
    const { pathname } = useLocation()
    const {success: questionUpdateSuccess} = useSelector(state => state.questionUpdate)
    const {success: questionDeleteSuccess} = useSelector(state => state.questionDelete)
    const {success: testQuestionsEditSuccess} = useSelector(state => state.editTestQuestions)
    // const {loading, error, fetchedQuestions} = useSelector(state => state.listQuestions)
    
    const history = useHistory()
    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState();
    const [formError, setFormError] = useState(false)
    const [newQuestions, setNewQuestions] = useState([])
    const [oldQuestions, setOldQuestions] = useState([])
    const [questions, setQuestions] = useState([])
    
    // data structure of questions
    // [{
        //   question: "",
    //   answer: "",
    //   options: []
    // }]

    const dispatch = useDispatch()

    useEffect(() => {
        getLessonQuestions()
        // dispatch(listQuestions(lessonId));
        // console.log(fetchedQuestions)
        //     if(fetchedQuestions) {
        //         setQuestions(fetchedQuestions)
        //         setOldQuestions(fetchedQuestions)
        //         setNewQuestions(fetchedQuestions)
        //         console.log(fetchedQuestions)
        //     }
    }, [questionUpdateSuccess, questionDeleteSuccess])

    async function getLessonQuestions() {
        try {
         const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/questions/lesson/${lessonId}`)
                 setQuestions(data.questions)
                setOldQuestions(data.questions)
                setNewQuestions(data.questions)   
        } catch (error) {
            setFormError(true)
        }
        
    }

    // function addQuestion() {
    //     setQuestions(prev => [...prev, { question: '', answer: '', options: [] }])
    //     setNewQuestions(prev => [...prev, { question: '', answer: '', options: [] }])
    //     setFormError(false)
    // }

      function addMcqQuestion () {
            setQuestions(prev => [...prev, { question: '', answer: '', type: "mcq", options: [] }])
            setNewQuestions(prev => [...prev, { question: '', answer: '', options: [] }])
            setFormError(false)
        }

        function addSubjectiveQuestion () {
            setQuestions(prev => [...prev, {question: "", type: "subjective"}])
            setNewQuestions(prev => [...prev, { question: '', type: "subjective"}])
            setFormError(false)
        }

    function resetQuestion() {
        setQuestions(oldQuestions);
        setNewQuestions([])
        setFormError(false)
    }

    const confirmDelete = async () => {
        // console.log(deleteId)
        dispatch(deleteSingleQuestion(deleteId));
        setDeleteModal(false)
    }

    const deleteQuestion = (id) => {
        setDeleteId(id)
        setDeleteModal(true)
    }

    async function editTest() {
        if (questions.length > 0) {
            if (checkArrayForFilledValue(newQuestions)) {
                return dispatch(updateTestQuestion(newQuestions))
            } 
        }
        
        setFormError(true)
    }

    return (<>
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
        <DashboardLayout
            title={pathname === `/admin/edit-test/${lessonId}`
                ? 'Edit Test'
                : 'Add Test'
            }>
            <div>
                <div className='add-test-container'>
                    <div>
                        <div className='add-test-inner-container'>
                            {questions.length > 0 && questions.map((item, index) => {
                                if(item.type === 'subjective') {
                                        return <SubjectiveQuestion 
                                        pos={questions.length - 1}
                                        questions={questions}
                                        newQuestions={newQuestions}
                                        setFormError={setFormError}
                                        formError={formError}
                                        index={index}
                                        deleteQuestion={deleteQuestion}
                                        />
                                    } else {
                                        return <QuestionAnswerComponent
                                        pos={questions.length - 1}
                                        index={index}
                                        questions={questions}
                                        newQuestions={newQuestions}
                                        setFormError={setFormError}
                                        formError={formError}
                                        deleteQuestion={deleteQuestion}
                                    />}
                            })}
                             <div className="btn-container">
                                <button onClick={() => addMcqQuestion()} className='secondary-btn add-question-btn'><img src='/img/plus.svg' alt='add icon' /><span>Add MCQ</span></button>
                                <button onClick={() => addSubjectiveQuestion()} className='secondary-btn add-question-btn'><img src='/img/plus.svg' alt='add icon' /><span>Add Subjective Question</span></button>
                            </div>
                            {(newQuestions.length - oldQuestions.length) > 0 && <div className='btn-container'>
                                <button className='secondary-btn reset-test-btn' onClick={resetQuestion}>Reset Edit</button>
                                <button className='secondary-btn color-primary' onClick={editTest}>Add new Questions</button>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
        </>
    )
}

function SubjectiveQuestion ({formError, setFormError, questions, pos, index, newQuestions, deleteQuestion}) {
  const [question, setQuestion] = useState('')
    const dispatch = useDispatch();
  useEffect(() => {
            setQuestion(questions[index].question)
    }, [])

  function onQuestionChange (e) {
    setQuestion(e.target.value)
    setFormError(false)
  }

  function editQuestion () {
    dispatch(updateQuestion({ id: questions[index].id, testId: parseInt(questions[index].testId), question, type:"subjective"}))
  }

  if(newQuestions.length > 0) {
        newQuestions[index].question = question
    }

  return (
    <div className='question-answer-container' key={pos}>
    {formError && <p className='error-message test-error'>Please fill out all the input.</p>}
    <h4 className="question-title">Subjective Question</h4>
      <div className='question-container'>
        <div>
          <input
            className='default-input-variation'
            placeholder='Question'
            value={question}
            onChange={(e) => onQuestionChange(e)}
          />
        </div>
      </div>
      {questions[index].id && <div className="question-btn-contaianer">
                <button onClick={() => editQuestion()}>Edit Question</button>
                <button onClick={() => deleteQuestion(questions[index].id)}>Delete Question</button>
            </div>}
    </div>
  )
}

function QuestionAnswerComponent({ pos, questions, index, newQuestions, setFormError, formError, deleteQuestion}) {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [options, setOptions] = useState([])
    const [newOptions, setNewOptions] = useState([])

    const dispatch = useDispatch();

    useEffect(() => {
            setQuestion(questions[index].question)
            setAnswer(questions[index].answer)
            setNewOptions(questions[index].options)
            setOptions(questions[index].options)
    }, [])

    function onQuestionChange(e) {
        setQuestion(e.target.value)
        setFormError(false)
    }

    function onAnswerChange(e) {
        setAnswer(e.target.value)
        setFormError(false)
    }

    function addOption() {
        setOptions(prev => {
            return [...prev, '']
        })
        setFormError(false)
    }

    function editQuestion () {
        dispatch(updateQuestion({ id: questions[index].id, testId: parseInt(questions[index].testId), question, answer, options}))
    }

    if(newQuestions.length > 0) {
        newQuestions[index].question = question
        newQuestions[index].answer = answer
        newQuestions[index].options = options
    }
    return (
        <div className='question-answer-container' key={index}>
            {formError && <p className='error-message test-error'>Please fill out all the input.</p>}
            <h4 className="question-title">MCQ Question</h4>
            <div className='question-container'>
                <div>
                    <input
                        className='default-input-variation'
                        placeholder='Question'
                        value={question}
                        onChange={(e) => onQuestionChange(e)}
                    />
                </div>
                <button><img src='/img/green-camera.svg' alt='photo icon' /> <h4>Add photo</h4></button>
            </div>
            <div className='test-answers-wrapper'>
                <div className='test-correct-answer'>
                    <h4>Write correct answer in this field</h4>
                    <div className='test-answer-input-field'>
                        <input className='default-input-variation' placeholder='Correct answer' value={answer} onChange={(e) => onAnswerChange(e)} />
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
                </div>
                <button className="add-new-course" onClick={addOption}><img src='/img/plus.svg' alt='add icon' /> <span>Add new answer</span></button>
            </div>
            {questions[index].id && <div className="question-btn-contaianer">
                <button onClick={() => editQuestion()}>Edit Question</button>
                <button onClick={() => deleteQuestion(questions[index].id)}>Delete Question</button>
            </div>}
        </div>
    )
}

function OptionAnswer({ options, setOptions, item, pos, newOptions, setFormError}) {
    const [answer, setAnswer] = useState('')

    function onAnswerChange(e) {
        setAnswer(e.target.value)
        options[pos] = e.target.value
        setFormError(false)
    }
    
    useEffect(() => {
        if (newOptions.length > 0) {
            setAnswer(newOptions[pos])
        }
    }, [])

    function removeItem(id) {
        const newOptions = [...options]
        const index = newOptions.indexOf(id)
        if (index !== -1) {
            newOptions.splice(index, 1)
            setOptions(newOptions)
        }
    }
    
    return (
        <div className='test-answer-input-field' key={pos}>
            <input
                className='default-input-variation incorrect-option'
                placeholder='Incorrect answer' value={answer} onChange={(e) => onAnswerChange(e)}
            />
            <img src='/img/minus-circle-outline.svg' alt='minus image' onClick={() => removeItem(item)} />
        </div>
    )
}

export default EditTest
