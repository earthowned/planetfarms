import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { createTest } from '../../actions/testActions'
import CollectionModalHeader from '../newsCreateModal/CollectionModalHeader'

import './AddTestModal.scss'

const AddTestModal = ({ setTestModal }) => {
  const {courseId: lessonId} = useParams();
  const [questions, setQuestions] = useState([
    //data structure
    // {
    //   question: "",
    //   answer: "",
    //   options: []
    // }
  ])

  const dispatch = useDispatch();

  function addQuestion () {
    // questions.push({
    //   question: '',
    //   correctanswer: ''
    // })
    setQuestions(prev => [...prev, {question: '', answer: '', options: []}])
  }

  function resetQuestion () {
    setQuestions([]);
  }
  // useEffect(() => {
  //   console.log(questions)
  // }, [questions])

  function addTest () {
    dispatch(createTest(lessonId, questions));
    setTestModal(false);
  }

  return (
    <div>
      <div className='collection-modal-container'>
        <div>
          <div className='collection-modal-inner-container'>
            <CollectionModalHeader title='Add test' clickHandler={setTestModal} />
            {questions.length > 0 && questions.map((index, item) => <QuestionAnswerComponent pos={questions.length - 1} index={index} questions={questions} />)}
            <button onClick={() => addQuestion()} className='secondary-btn add-question-btn'><img src='/img/plus.svg' alt='add icon' /><span>Add question</span></button>
            <div className='btn-container'>
              <button className='secondary-btn reset-test-btn' onClick={resetQuestion}>Reset test</button>
              <button className='secondary-btn color-primary' onClick={(addTest)}>Add test</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function QuestionAnswerComponent ({ pos, questions, index}) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [options, setOptions] = useState([""]);

  function onQuestionChange(e) {
    setQuestion(e.target.value);
  }
  
  function onAnswerChange(e) {
    setAnswer(e.target.value);
  }

  function addOption() {
    setOptions(prev => {
      return [...prev, '']
    })
  }
  
  questions[pos].question = question
  questions[pos].answer = answer
  questions[pos].options = options
  return (
    <div className='question-answer-container' key={index}>
      <div className='question-container'>
        <div>
          <input className='default-input-variation' placeholder='Question' value={question} onChange={(e) => onQuestionChange(e)} />
        </div>
        <button><img src='/img/green-camera.svg' alt='photo icon' /> <h4>Add photo</h4></button>
      </div>
      <div className='test-answers-wrapper'>
        <div className='test-correct-answer'>
          <h4>Write correct answer in this field</h4>
          <div className="test-answer-input-field">
            <input className='default-input-variation' placeholder='Correct answer' value={answer} onChange={(e) => onAnswerChange(e)} />
            <img src="/img/minus-circle-outline.svg" alt="minus image" onClick={() => setAnswer('')} />
          </div>
          <span>Answer will be mixed for users</span>
        </div>
        <div className="option-answers">
        {options.length > 0 && options.map((item, index) => <OptionAnswer options={options} pos={index} setOptions={setOptions} item={item} />)}
        <button onClick={addOption}><img src='/img/plus.svg' alt='add icon' /> <span>Add new answer</span></button>
        </div>
      </div>
    </div>
  )
}

function OptionAnswer ({options, setOptions, item, pos}) {
  const[answer, setAnswer] = useState('');
  
   function onAnswerChange(e) {
    setAnswer(e.target.value);
  }
  options[pos] = answer;
  
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
  }, [])

  function removeItem (id) {
    let newOptions = [...options];
    const index = newOptions.indexOf(id);
    console.log(index)
    if(index !== -1) {
      newOptions.splice(index, 1);
      setOptions(newOptions);
    }
  }

  return (
    <div className="test-answer-input-field" key={pos}>
      <input className='default-input-variation incorrect-option' placeholder='Incorrect answer' value={answer} onChange={(e) => onAnswerChange(e)} />
      <img src="/img/minus-circle-outline.svg" alt="minus image" onClick={() => removeItem(item)} />
    </div>
  )
}
export default AddTestModal
