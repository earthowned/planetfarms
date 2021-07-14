import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { createTest } from '../../actions/testActions'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './AddTest.scss'
import { useHistory } from 'react-router-dom'
import { checkArrayForFilledValue } from '../../utils/checkFilledArray'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const AddTest = () => {
  const { lessonId } = useParams()
  
  const history = useHistory()
  const [formError, setFormError] = useState(false)
  const[count, setCount] = useState(0);
  const [newQuestions, setNewQuestions] = useState([]);
  const [questions, setQuestions] = useState([])
  // data structure of questions
  // [{
  //   question: "",
  //   answer: "",
  //   options: []
  // }]

  const dispatch = useDispatch()

  
  function addMcqQuestion () {
    setCount(cur => cur + 1)
    setQuestions(prev => [...prev, { id: count, question: '', answer: '', type: "mcq", options: [] }])
    setNewQuestions(questions);
    setFormError(false)
  }

  function addSubjectiveQuestion () {
    setCount(cur => cur + 1)
    setQuestions(prev => [...prev, {id: count, question: "", type: "subjective"}])
    setFormError(false)
  }
console.log(questions);
  function resetQuestion () {
    setQuestions([])
    setFormError(false)
  }

  function addTest () {
    if (questions.length > 0) {
      if (checkArrayForFilledValue(questions)) {
        dispatch(createTest(lessonId, questions))
       return history.goBack()
      } 
    }
    setFormError(true)
  }

  // useEffect(() => {
  //   setQuestions(newQuestions)
  // }, [newQuestions])

  function removeQuestion (id) {
    const result = Array.from(questions);
    let index = result.findIndex(function (o) {
      return o.id === id
    })
    
    const newArray = [];

    for (let i = index + 1; i < result.length; i++ ) {
      let newObject = {
        id: result[i].id,
        question: result[i].question,
        type: result[i].type
      }
      
      newArray.push(newObject);
    }
    
    setNewQuestions(newArray);
    //  setQuestions([])
    //   setQuestions(newArray)
    
    // setQuestions(questions.splice(index, 1));
  }

  
  // a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);

  const [removed] = result.splice(startIndex, 1);
  console.log(removed);
  result.splice(endIndex, 0, removed);
  
  return result;
};


  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    
    const list = reorder(
      questions,
      result.source.index,
      result.destination.index
    );

    setQuestions(list)
    const {destination, source, draggableId} = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
  }

  return (
    <DashboardLayout title='Add Test'>
      <div>
        <div className='add-test-container'>
          <div>
            <div className='add-test-inner-container'>
              {/* {questions.length > 0 && questions.map((index, item) => <QuestionAnswerComponent pos={questions.length - 1} index={index} questions={questions} questionError={questionError} />)} */}
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => {
                    return <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{background: snapshot.isDragging && "green"}}
                      >
                        {questions.map((item, index) => 
                              {
                                  if(item.type === 'subjective') {
                                    return <SubjectiveQuestion 
                                    pos={questions.length - 1}
                                    questions={questions}
                                    setFormError={setFormError}
                                    formError={formError}
                                    index={index}
                                    item={item}
                                    setQuestions={setQuestions}
                                    removeQuestion={removeQuestion}
                                    newQuestions={newQuestions}
                                    innerRef={provided.innerRef}
                                    provided={provided}
                                    />
                                  } else {
                                    return <QuestionAnswerComponent
                                    pos={questions.length - 1}
                                    index={index}
                                    questions={questions}
                                    setFormError={setFormError}
                                    formError={formError}
                                    item={item}
                                    innerRef={provided.innerRef}
                                    provided={provided}
                                  />}
                                }
                                
                        )}

              {provided.placeholder}
                      </div>
                }}
              </Droppable>
              </DragDropContext>

              <div className="btn-container">
              <button onClick={() => addMcqQuestion()} className='secondary-btn add-question-btn'><img src='/img/plus.svg' alt='add icon' /><span>Add MCQ</span></button>
              <button onClick={() => addSubjectiveQuestion()} className='secondary-btn add-question-btn'><img src='/img/plus.svg' alt='add icon' /><span>Add Subjective Question</span></button>
              </div>
              
              <div className='btn-container'>
                <button className='secondary-btn reset-test-btn' onClick={resetQuestion}>Reset test</button>  
               <button className='secondary-btn color-primary' onClick={(addTest)}>Add test</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

function SubjectiveQuestion ({formError, setFormError, questions,newQuestions, pos, index, item, removeQuestion, provided, innerRef}) {
  const [question, setQuestion] = useState('')
  function onQuestionChange (e) {
    setQuestion(e.target.value)
    setFormError(false)
  }

    
  questions[index].question = question
  
  return (
    <Draggable draggableId={item.id.toString()} index={index}>
      {(provided, snapshot) => {
        return <div className='question-answer-container' key={pos} 
               {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
              {formError && <p className='error-message test-error'>Please fill out all the input.</p>}
              <h4 className="question-title">Subjective Question</h4> 
              {/* <img src='/img/minus-circle-outline.svg' alt='minus image' onClick={() => removeQuestion(item.id)}/> */}
                <div className='question-container'> 
                  <div>
                    <input
                     value={question}
                      onChange={(e) => onQuestionChange(e)}
                      className='default-input-variation'
                      placeholder='Question'
                      
                    />
                  </div>
                </div>
              </div>
      }}
    </Draggable>
  )
}

function QuestionAnswerComponent ({ pos, questions, index, setFormError, formError, item, provided, innerRef }) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [options, setOptions] = useState([''])
  
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

  questions[index].question = question
  questions[index].answer = answer
  questions[index].options = options
  return (
    <Draggable draggableId={item.id.toString()} index={index}>
      {(provided, snapshot) => {
        return <div className='question-answer-container' key={pos} 
               {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
      {formError && <p className='error-message test-error'>Please fill out all the input.</p>}
      <h4 className="question-title">MCQ Question</h4> 
      {/* <img src='/img/minus-circle-outline.svg' alt='minus image' /> */}
      <div className='question-container'>
        <div>
          <input
          ref={provided.innerRef}
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
              item={item}
              setFormError={setFormError}
            />)}
        </div>
        <button className="add-new-course" onClick={addOption}><img src='/img/plus.svg' alt='add icon' /> <span>Add new answer</span></button>
      </div>
    </div>
    }}
    </Draggable>
  )
}

function OptionAnswer ({ options, setOptions, item, pos, setFormError}) {
  const [answer, setAnswer] = useState('')
  function onAnswerChange (e) {
    setAnswer(e.target.value)
    setFormError(false)
  }

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
      <input
        className='default-input-variation incorrect-option'
        placeholder='Incorrect answer' value={answer} onChange={(e) => onAnswerChange(e)}
      />
      <img src='/img/minus-circle-outline.svg' alt='minus image' onClick={() => removeItem(item)} />
    </div>
  )
}

export default AddTest
