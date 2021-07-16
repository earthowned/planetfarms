import { useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { createTest } from '../../actions/testActions'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './AddTest.scss'
import { useHistory } from 'react-router-dom'
import { checkArrayForFilledValue } from '../../utils/checkFilledArray'
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { Card } from "./Card";
import { useDrag, useDrop } from "react-dnd";
import update from "immutability-helper";

const AddTest = () => {
    const [cards, setCards] = useState([]);
    const [count, setCount] = useState(1);
    const [questions, setQuestions] = useState([]);
    const [formError, setFormError] = useState(false);
    const [options, setOptions] = useState([]);

    const {lessonId} = useParams();
    const dispatch = useDispatch();

    function addMCQQuestion() {
      setCount((cur) => cur + 1);
      setQuestions((cur) => [
        ...cur,
        { id: count, type: "mcq", question: "", options: [""], answer: "" }
      ]);
      setCards((cur) => [...cur, { id: count, type: "mcq" }]);
    }

    function addSubjectiveQuestion() {
      setCount((cur) => cur + 1);
      setQuestions((cur) => [
        ...cur,
        { id: count, type: "subjective", question: "" }
      ]);
      setCards((cur) => [...cur, { id: count, type: "subjective" }]);
    }

      function resetQuestion () {
        setQuestions([])
        setCards([])
        setFormError(false)
      }

    function submitQuestion() {
      if (questions.length > 0) {
      if (checkArrayForFilledValue(questions) && !options.includes("")) {
          const newQuestions = orderQuestions();

        return dispatch(createTest(lessonId, newQuestions))
      //  return history.goBack()
      }
    } 
    setFormError(true)
    }

    function orderQuestions () {
      const newQuestions = [];

        cards.forEach(el => {
          if(el.type === "mcq") {
            const newObj ={
              question: questions[questions.findIndex(item => item.id === el.id)].question,
              answer: questions[questions.findIndex(item => item.id === el.id)].answer,
              options: questions[questions.findIndex(item => item.id === el.id)].options,
              type: "mcq"
            }
            newQuestions.push(newObj)
          } else {
            const newObj ={
              question: questions[questions.findIndex(item => item.id === el.id)].question,
              type: "subjective"
            }
            newQuestions.push(newObj)
          }
        })

        return newQuestions
    }
    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex];
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard]
            ]
          })
        );
      },
      [cards]
    );
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
          formError={formError}
          setFormError={setFormError}
          options={options}
          setOptions={setOptions}
        />
      );
    };
    return (
      <DashboardLayout title="Add Test">
        
        <div div className='add-test-container' >{cards.map((card, i) => renderCard(card, i))}</div>
        <div className="btn-container">
              <button onClick={addMCQQuestion} className='secondary-btn add-question-btn'><img src='/img/plus.svg' alt='add icon' /><span>Add MCQ</span></button>
              <button onClick={addSubjectiveQuestion} className='secondary-btn add-question-btn'><img src='/img/plus.svg' alt='add icon' /><span>Add Subjective Question</span></button>
              </div>
              <div className='btn-container'>
                <button className='secondary-btn reset-test-btn' onClick={resetQuestion}>Reset test</button>  
                <button className='secondary-btn color-primary' onClick={submitQuestion}>Add test</button>
              </div>
      </DashboardLayout>
    );
};

const ItemTypes = {
  CARD: "card"
};

const style2 = {
  border: ".5px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  borderRadius: "4px",
  cursor: "move"
};

const Card = ({ id, type, index, moveCard, questions, formError, setFormError, setOptions, options }) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  // const opacity = isDragging ? 0 : 1;
  const background = isDragging ? "#00C688" : "";
  drag(drop(ref));
  return (
    <div ref={ref} style={{ ...style2, background }} data-handler-id={handlerId}>
      <div className="question-answer-container">
      {type === "mcq" ? (
        <MCQQuestion
          questions={questions}
          id={id}
          formError={formError}
          setFormError={setFormError}
          options={options}
          setOptions={setOptions}
        />
      ) : (
        <SubjectiveQuestion 
          questions={questions} id={id} 
          formError={formError}
          setFormError={setFormError}
        />
      )}
      </div>
    </div>
  );
};

function SubjectiveQuestion({ questions, id, formError, setFormError }) {
    const [question, setQuestion] = useState("");
  
  function changeQuestion(e) {
    setQuestion(e.target.value);
    questions[questions.findIndex((el) => el.id === id)].question =
      e.target.value;
      setFormError(false)
  }

  return (
    <>
    {formError && <p className='error-message test-error'>Please fill out all the input.</p>}
      <h4 className="question-title">Subjective Question</h4> 
      <div className='question-container'> 
          <div>
            <input
              value={question}
              onChange={(e) => changeQuestion(e)}
              className='default-input-variation'
              placeholder='Question'
                />
          </div>
        </div>
    </>
  );
}

function MCQQuestion({ id, questions, formError, setFormError, options, setOptions }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  
  function changeQuestion(e) {
    setQuestion(e.target.value);
    questions[questions.findIndex((el) => el.id === id)].question =
      e.target.value;
      setFormError(false)
  }

  function changeAnswer(e) {
    setAnswer(e.target.value);
    questions[questions.findIndex((el) => el.id === id)].answer =
      e.target.value;
      setFormError(false)
  }

  useEffect(() => {
    setOptions(questions[questions.findIndex((el) => el.id === id)].options);
  }, []);

  function addQuestion() {
    setOptions((cur) => [...cur, ""]);
    setFormError(false)
  }

  return (
    <>
    {formError && <p className='error-message test-error'>Please fill out all the input.</p>}
      <h4 className="question-title">MCQ Question</h4>
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
                <input className='default-input-variation' placeholder='Correct answer' value={answer} onChange={(e) => changeAnswer(e)} />
                 <img src='/img/minus-circle-outline.svg' alt='minus image' onClick={() => setAnswer('')} />
             </div>
             <span>Answer will be mixed for users</span>
            </div>
            <div className='option-answers'>
                  {options.length > 0 && options.map((item, index) =>
                         <InputComponent index={index} questions={questions} id={id} setFormError={setFormError} options={options} />
                    )}
             </div>
             <button className="add-new-course" onClick={addQuestion}><img src='/img/plus.svg' alt='add icon' /> <span>Add new answer</span></button>
        </div>
    </>
  );
}

function InputComponent({ index, questions, id, setFormError, options }) {
  const [question, setQuestion] = useState("");
  function onQuestionChange(e) {
    setQuestion(e.target.value);
    questions[questions.findIndex((el) => el.id === id)].options[index] =
      e.target.value;
      options[index] = e.target.value
      setFormError(false)
  }

   function removeItem () {
    // const newOptions = [...options]
    // const index = newOptions.indexOf(id)
    // console.log(index)
    // if (index !== -1) {
    //   newOptions.splice(index, 1)
    //   setOptions(newOptions)
    // }
  }

  return (
        <div className='test-answer-input-field' key={index}>
          <input
              className='default-input-variation incorrect-option'
              placeholder='Incorrect answer' value={question} onChange={(e) => onQuestionChange(e)}
            />
            <img src='/img/minus-circle-outline.svg' alt='minus image' onClick={() => removeItem()} />
        </div>
  );
}

export default AddTest
