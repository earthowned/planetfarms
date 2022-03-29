/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import InputComponent from "./InputComponent";

function MCQQuestion({
  id,
  questions,
  setQuestions,
  formError,
  setFormError,
  cards,
  setCards,
  deleteQuestion,
  newQuestions,
}) {
  const [options, setOptions] = useState([""]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [newOptions, setNewOptions] = useState([""]);
  const { lessonId } = useParams();
  const { pathname } = useLocation();
  const [testId, setTestId] = useState(null);

  function changeQuestion(e) {
    setQuestion(e.target.value);
    questions[questions.findIndex((el) => el.id === id)].question =
      e.target.value;
    setFormError(false);
  }

  function changeAnswer(e) {
    setAnswer(e.target.value);
    questions[questions.findIndex((el) => el.id === id)].answer =
      e.target.value;
    setFormError(false);
  }

  function addQuestion() {
    setOptions((cur) => [...cur, ""]);
    questions[questions.findIndex((el) => el.id === id)].options.push("");
    setFormError(false);
  }

  useEffect(() => {
    if (pathname === `/admin/add-test/${lessonId}`) {
      setOptions(questions[questions.findIndex((el) => el.id === id)].options);
      setTestId(questions[questions.findIndex((el) => el.id === id)].testId);
    } else if (newQuestions.length) {
      setQuestion(
        questions[questions.findIndex((el) => el.id === id)].question
      );
      setAnswer(questions[questions.findIndex((el) => el.id === id)].answer);
      setOptions(questions[questions.findIndex((el) => el.id === id)].options);
      setTestId(questions[questions.findIndex((el) => el.id === id)].testId);
    }
  }, [newQuestions, options]);

  useEffect(() => {
    if (questions.length) {
      setQuestion(
        questions[questions.findIndex((el) => el.id === id)].question
      );
      setAnswer(questions[questions.findIndex((el) => el.id === id)].answer);
      setOptions(questions[questions.findIndex((el) => el.id === id)].options);
    }
  }, [cards]);

  const removeQuestion = () => {
    const removed = questions.splice(
      questions.findIndex((el) => el.id === id),
      1
    );
    // eslint-disable-next-line no-shadow
    const newQuestions = questions.filter((item) => item.id !== removed.id);
    setQuestions(newQuestions);

    const removedCard = cards.splice(
      cards.findIndex((el) => el.id === id),
      1
    );
    const newCards = cards.filter((item) => item.id !== removedCard.id);
    setCards(newCards);
  };

  return (
    <>
      {formError && (
        <p className="error-message test-error">
          Please fill out all the input.
        </p>
      )}
      <div className="question-header">
        <h4 className="question-title">Objective Question</h4>
        {!testId ? (
          <img
            src="/img/minus-circle-outline.svg"
            alt="minus-1"
            onClick={removeQuestion}
          />
        ) : (
          <img
            src="/img/minus-circle-outline.svg"
            alt="minus-2"
            onClick={() =>
              deleteQuestion(
                questions[questions.findIndex((el) => el.id === id)].id
              )
            }
          />
        )}
      </div>
      <div className="question-container">
        <div>
          <input
            className="default-input-variation"
            placeholder="Question"
            value={question}
            onChange={(e) => changeQuestion(e)}
          />
        </div>
        <button type="button">
          <img src="/img/green-camera.svg" alt="" /> <h4>Add photo</h4>
        </button>
      </div>
      <div className="test-answers-wrapper">
        <div className="test-correct-answer">
          <h4>Write correct answer in this field</h4>
          <div className="test-answer-input-field">
            <input
              className="default-input-variation"
              placeholder="Correct answer"
              value={answer}
              onChange={(e) => changeAnswer(e)}
            />
          </div>
          <span>Answer will be mixed for users</span>
        </div>
        <div className="option-answers">
          {options.length > 0 &&
            options.map((item, index) => (
              <InputComponent
                key={`mcq-question-input-${index.toString()}`}
                index={index}
                questions={questions}
                id={id}
                setFormError={setFormError}
                options={options}
                setOptions={setOptions}
                newOptions={newOptions}
                setNewOptions={setNewOptions}
                item={item}
                newQuestions={newQuestions}
              />
            ))}
        </div>
        <button type="button" className="add-new-course" onClick={addQuestion}>
          <img src="/img/plus.svg" alt="add icon" />
          <span>Add new answer</span>
        </button>
      </div>
    </>
  );
}
export default MCQQuestion;
