import { useState, useEffect } from 'react'
function SubjectiveQuestion ({
  questions,
  setQuestions,
  id,
  formError,
  setFormError,
  cards,
  setCards,
  deleteQuestion,
  newQuestions
}) {
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
    const removed = questions.splice(
      questions.findIndex((el) => el.id === id),
      1
    )
    const newQuestions = questions.filter((item) => item.id !== removed.id)
    setQuestions(newQuestions)

    const removedCard = cards.splice(
      cards.findIndex((el) => el.id === id),
      1
    )
    const newCards = cards.filter((item) => item.id !== removedCard.id)
    setCards(newCards)
  }

  return (
    <>
      {formError && (
        <p className='error-message test-error'>
          Please fill out all the input.
        </p>
      )}
      <div className='question-header'>
        <h4 className='question-title'>Subjective Question</h4>
        {!testId ? (
          <img
            src='/img/minus-circle-outline.svg'
            alt='minus image'
            onClick={removeQuestion}
          />
        ) : (
          <img
            src='/img/minus-circle-outline.svg'
            alt='minus image'
            onClick={() =>
              deleteQuestion(
                questions[questions.findIndex((el) => el.id === id)].id
              )}
          />
        )}
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

export default SubjectiveQuestion
