import React, { useState, useEffect } from 'react'
import CollectionModalHeader from '../newsCreateModal/CollectionModalHeader'

import './AddTestModal.scss'

const AddTestModal = ({ setTestModal }) => {
  const [questions, setQuestions] = useState([
    {
      question: '',
      correctanswer: ''
    },
    {
      question: '',
      correctanswer: ''
    }
  ])

  function addQuestion () {
    questions.push({
      question: '',
      correctanswer: ''
    })
  }

  useEffect(() => {
    console.log(questions)
  }, [questions])

  return (
    <div>
      <div className='collection-modal-container'>
        <div>
          <div className='collection-modal-inner-container'>
            <CollectionModalHeader title='Add test' clickHandler={setTestModal} />
            {questions.length > 0 && questions.map(item => <QuestionAnswerComponent item={item} setQuestions={setQuestions} />)}
            <button onClick={() => addQuestion()} className='secondary-btn add-question-btn'><img src='/img/plus.svg' alt='add icon' /><span>Add question</span></button>
            <div className='btn-container'>
              <button className='secondary-btn reset-test-btn'>Reset test</button>
              <button className='secondary-btn color-primary'>Add test</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function QuestionAnswerComponent ({ item, setQuestions }) {
  return (
    <div className='question-answer-container'>
      <div className='question-container'>
        <div>
          <input className='default-input-variation' placeholder='Question' value={item.question} onChange={(e) => setQuestions({})} />
        </div>
        <button><img src='/img/green-camera.svg' alt='photo icon' /> <h4>Add photo</h4></button>
      </div>
      <div className='test-answers-wrapper'>
        <div className='test-correct-answer'>
          <h4>Write correct answer in this field</h4>
          <div>
            <input className='default-input-variation' placeholder='Correct answer' value={item.corectanswer} onChange={(e) => setQuestions([{ corectanswer: e.target.value }])} />
          </div>
          <span>Answer will be mixed for users</span>
        </div>
      </div>
    </div>
  )
}
export default AddTestModal
