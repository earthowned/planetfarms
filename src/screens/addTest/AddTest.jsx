import { useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { createTest, updateTestQuestion } from '../../actions/testActions'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import './AddTest.scss'
import { useHistory } from 'react-router-dom'
import { checkArrayForFilledValue } from '../../utils/checkFilledArray'
import { v4 as uuidv4 } from 'uuid';
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { Card } from "./Card";
import { useDrag, useDrop } from "react-dnd";
import update from "immutability-helper";
import axios from 'axios'
import { deleteSingleQuestion, updateQuestion } from '../../actions/questionActions'
import { InputFields } from '../../components/formUI/FormUI'
import { useFieldArray, useForm } from 'react-hook-form'

const AddTest = () => {
    const [cards, setCards] = useState([]);
    // const [count, setCount] = useState(1);
    const [questions, setQuestions] = useState([]);
    const [newQuestions, setNewQuestions] = useState([]);
    const [formError, setFormError] = useState(false);
    // const [options, setOptions] = useState([]);
    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState();
    const [editModal, setEditModal] = useState(false)
    const [editId, setEditId] = useState();

    const {lessonId} = useParams();
    const {pathname} = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
      if(pathname === `/admin/edit-test/${lessonId}`) getLessonQuestions()
    }, [])

    

    async function getLessonQuestions() {
        try {
         const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/questions/lesson/${lessonId}`)
               if(data) {
                 setCards(data.questions)
                 setQuestions(data.questions)
                 setNewQuestions(data.questions)
               }
        } catch (error) {
            setFormError(true)
        }
        
    }


    function addMCQQuestion() {
      let id = uuidv4();
      setQuestions((cur) => [
        ...cur,
        { id, type: "mcq", question: "", options: [""], answer: "" }
      ]);
      setCards((cur) => [...cur, { id, type: "mcq" }]);
    }

    function addSubjectiveQuestion() {
      let id = uuidv4();
      setQuestions((cur) => [
        ...cur,
        { id, type: "subjective", question: "" }
      ]);
      setCards((cur) => [...cur, { id, type: "subjective" }]);
    }

      function resetQuestion () {
        if(pathname === `/admin/edit-test/${lessonId}`) {
          setQuestions(newQuestions)
          setCards(newQuestions)
        } else {
          setQuestions([])
          setCards([])
        }
        
        setFormError(false)
      }

    function submitQuestion() {
      if (questions.length > 0) {
      if (checkArrayForFilledValue(questions)) {
          const newQuestions = orderQuestions();
          
        dispatch(createTest(lessonId, newQuestions))
        return history.goBack()
      }
    } 
    setFormError(true)
    }
    
    //edit section

    const confirmDelete = async () => {
        // console.log(deleteId)
        dispatch(deleteSingleQuestion({deleteId, lessonId}));
        setDeleteModal(false)
    }

    const deleteQuestion = (id) => {
        setDeleteId(id)
        setDeleteModal(true)
    }


    async function editTest() {
        if (questions.length > 0) {
            if (checkArrayForFilledValue(questions)) {
                const editQuestions = orderQuestions();
                const {data} = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/tests/${editQuestions[0].testId}`, { questions: editQuestions });
                if(data) document.location.href = `/admin/edit-test/${lessonId}`
            }
          }
          setFormError(true)
    }

    
    const editQuestion = (id) => {
        setEditId(id)
        setEditModal(true)
    }


    function orderQuestions () {
      const newQuestions = [];

        cards.forEach(el => {
          if(el.type === "mcq") {
            const newObj ={
              id: questions[questions.findIndex(item => item.id === el.id)].id,
              question: questions[questions.findIndex(item => item.id === el.id)].question,
              answer: questions[questions.findIndex(item => item.id === el.id)].answer,
              options: questions[questions.findIndex(item => item.id === el.id)].options,
              testId: questions[questions.findIndex(item => item.id === el.id)].testId,
              type: "mcq"
            }
            newQuestions.push(newObj)
          } else {
            const newObj ={
              id: questions[questions.findIndex(item => item.id === el.id)].id,
              question: questions[questions.findIndex(item => item.id === el.id)].question,
              testId: questions[questions.findIndex(item => item.id === el.id)].testId,
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
          newQuestions={newQuestions}
          formError={formError}
          setFormError={setFormError}
          // options={options}
          // setOptions={setOptions}
          cards={cards}
          setCards={setCards}
          deleteQuestion={deleteQuestion}
          editQuestion={editQuestion}
        />
      );
    };
    return (
      <>
      <DeleteQuestionModal confirmDelete={confirmDelete} setDeleteModal={setDeleteModal} deleteModal={deleteModal} />
      <EditQuestionModal questions={questions} setQuestions={setQuestions} editId={editId} editModal={editModal} setEditModal={setEditModal} />
      <DashboardLayout title="Add Test">
        <div div className='add-test-container' >{cards.map((card, i) => renderCard(card, i))}</div>
        <div className="btn-container">
              <button onClick={addMCQQuestion} className='secondary-btn add-question-btn'><img src='/img/plus.svg' alt='add icon' /><span>Add MCQ</span></button>
              <button onClick={addSubjectiveQuestion} className='secondary-btn add-question-btn'><img src='/img/plus.svg' alt='add icon' /><span>Add Subjective Question</span></button>
              </div>
              <div className='btn-container'>
                <button className='secondary-btn reset-test-btn' onClick={resetQuestion}>Reset test</button>  
                {
                pathname === `/admin/edit-test/${lessonId}` 
                ? <button className='secondary-btn color-primary' onClick={editTest}>Edit test</button>
                : <button className='secondary-btn color-primary' onClick={submitQuestion}>Add test</button>
                }
              </div>
      </DashboardLayout>
      </>
    );
};

const DeleteQuestionModal = ({confirmDelete, setDeleteModal, deleteModal}) => {
  return(
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

const EditQuestionModal = ({questions, editId, editModal, setEditModal}) => {
  const [newOptions, setNewOptions] = useState([]);
  const { register: regi, errors, handleSubmit } = useForm()
  const [modalFormError, setModalFormError] = useState(false);
  
  const dispatch = useDispatch();
  const {lessonId} = useParams();

  const confirmEdit = async ({question, answer}) => {
        // dispatch(updateQuestion());
        // setEditModal(false)
        if(questions[questions.findIndex((el) => el.id === editId)].type === "mcq") {
          if(!newOptions.includes("")) {
            
            return dispatch(updateQuestion({
              id: questions[questions.findIndex((el) => el.id === editId)].id, 
              options: newOptions,
              question,
              answer,
              lessonId,
              type: questions[questions.findIndex((el) => el.id === editId)].type,
              testId: questions[questions.findIndex((el) => el.id === editId)].testId
            }));
          }
          return setModalFormError(true)
        }

        return dispatch(updateQuestion({
          id: questions[questions.findIndex((el) => el.id === editId)].id,
          question, 
          lessonId, 
          type: questions[questions.findIndex((el) => el.id === editId)].type,
          testId: questions[questions.findIndex((el) => el.id === editId)].testId
        }))
    }

    function addQuestion() {
      setNewOptions((cur) => [...cur, ""]);
      setModalFormError(false)
    }

    function closeModal () {
      setEditModal(false)
      setModalFormError(false)
      // setNewOptions([]);
    }

    useEffect(() => {
      if(editId) {
        if(questions[questions.findIndex((el) => el.id === editId)].type === "mcq") {
          setNewOptions(questions[questions.findIndex((el) => el.id === editId)].options)
        }
      }
    }, [editId])
  return(
    <>
    {editModal && <div className="question-modal-container">
            <form className='question-modal-inner-container' onSubmit={handleSubmit(confirmEdit)}>
              <div className="question-modal-header">
                    <h4>Edit Question</h4>
                    <img src="/img/close-outline.svg" alt="close icon" onClick={() => closeModal()} />
                </div>
                {
                  questions[questions.findIndex((el) => el.id === editId)].type === "subjective" 
                  ? <div className="question-form-conatiner">
                      <InputFields
                      type='text'
                      placeholder='Question'
                      name='question'
                      id='question'
                      defaultValue={questions[questions.findIndex((el) => el.id === editId)].question}
                      ref={regi({
                        required: {
                          value: true,
                          message: 'You must enter the Question'
                        }
                      })}
                      errors={errors}
                      />
                    </div>
                  : <div className="question-form-conatiner">
                      <InputFields
                      type='text'
                      placeholder='Question'
                      name='question'
                      id='question'
                      defaultValue={questions[questions.findIndex((el) => el.id === editId)].question}
                      ref={regi({
                        required: {
                          value: true,
                          message: 'You must enter the Question'
                        }
                      })}
                      errors={errors}
                      />
                      <InputFields
                      type='text'
                      placeholder='Answer'
                      name='answer'
                      id='answer'
                      defaultValue={questions[questions.findIndex((el) => el.id === editId)].answer}
                      ref={regi({
                        required: {
                          value: true,
                          message: 'You must enter the Answer'
                        }
                      })}
                      errors={errors}
                      />
                      <span>Options</span>
                      {modalFormError ? <p className='error-message test-error'>Please fill all the inputs.</p> : <p></p>}
                      <div className='option-answers'>
                            {newOptions.length > 0 && newOptions.map((item, index) =>
                                  <ModalInput
                                  id= {questions[questions.findIndex((el) => el.id === editId)].id}
                                  item={item} 
                                  newOptions={newOptions} 
                                  setNewOptions={setNewOptions}
                                  questions={questions} 
                                  index={index} 
                                  setModalFormError={setModalFormError} />
                              )}
                      </div>
                      <div className="add-new-course" onClick={addQuestion}><img src='/img/plus.svg' alt='add icon' /> 
                      <span>Add new answer</span></div>
                      </div>
                }
                <div className="btn-container">
                    <button className='secondary-btn'>Confirm</button>
                </div>
            </form>
        </div>}
    </>
  )
}

const ModalInput = ({item, newOptions, setNewOptions, index, setModalFormError, questions, id}) => {
  const[option, setOption] = useState(item)

  useEffect(() => {
        if (newOptions.length > 0) {          
            setOption(newOptions[index])
            if(questions.length) {
              questions[questions.findIndex((el) => el.id === id)].options = newOptions
            }
        }
    }, [newOptions])

  function onQuestionChange(e) {
    setOption(e.target.value);
      newOptions[index] = e.target.value
      setModalFormError(false)
  }

  function removeItem () {
    let removedItem = newOptions.splice(index, 1);
    let newItems = newOptions.filter((el)=> el !== removedItem)
    setNewOptions(newItems)
  }

  return (
    <div className="question-modal-options">
          <input 
            value={option} 
            onChange={(e) => onQuestionChange(e)} 
            className='default-input-variation'
            placeholder='Question'
          />
        {newOptions.length > 1 && <img src='/img/minus-circle-outline.svg' alt='minus image'  onClick={removeItem} />}
    </div>
  )
}

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

const Card = ({ id, type, index, moveCard, questions, setQuestions,
  formError, setFormError, setOptions, options, 
  cards, setCards, deleteQuestion, newQuestions, editQuestion }) => {
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
          setQuestions={setQuestions}
          id={id}
          formError={formError}
          setFormError={setFormError}
          options={options}
          setOptions={setOptions}
          cards={cards}
          setCards={setCards}
          deleteQuestion={deleteQuestion}
          editQuestion={editQuestion}
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
          editQuestion={editQuestion}
          newQuestions={newQuestions}
        />
      )}
      </div>
    </div>
  );
};

function SubjectiveQuestion({ questions, setQuestions, id, formError, setFormError, cards, setCards, deleteQuestion, newQuestions, editQuestion }) {
    const [question, setQuestion] = useState("");
    const [isDisable, setIsDisable] = useState(false);
  
  function changeQuestion(e) {
    setQuestion(e.target.value);
    questions[questions.findIndex((el) => el.id === id)].question =
      e.target.value;
      setFormError(false)
  }

  useEffect(() => {
    if(newQuestions.length > 0) {
    setQuestion(questions[questions.findIndex((el) => el.id === id)].question)
    if(questions[questions.findIndex((el) => el.id === id)].testId) {
      setIsDisable(true)
    }
    }
  }, [newQuestions])

  useEffect(() => {
    if(questions.length){
      setQuestion(questions[questions.findIndex((el) => el.id === id)].question)
    }
  }, [cards])

  const removeQuestion = () => {
    //for questions
    let removed = questions.splice(questions.findIndex((el) => el.id === id), 1)
    let newQuestions = questions.filter(item => item.id !== removed.id);
    setQuestions(newQuestions)
    //for cards
    let removedCard = cards.splice(cards.findIndex((el) => el.id === id), 1);
    let newCards = cards.filter(item => item.id !== removedCard.id);
    setCards(newCards)
  }

  return (
    <>
    {formError && <p className='error-message test-error'>Please fill out all the input.</p>}
    <div className="question-header">
      <h4 className="question-title">Subjective Question</h4> 
      {!isDisable && <img src='/img/minus-circle-outline.svg' alt='minus image' onClick={removeQuestion}/>}
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
          {cards[cards.findIndex((el) => el.id === id)].question && <div className="question-btn-contaianer">
                <button onClick={() => editQuestion(questions[questions.findIndex((el) => el.id === id)].id)}>Edit Question</button>
                <button onClick={() => deleteQuestion(questions[questions.findIndex((el) => el.id === id)].id)}>Delete Question</button>
            </div>}
        </div>
    </>
  );
}

function MCQQuestion({ id, questions, setQuestions, formError, setFormError, cards, setCards, deleteQuestion, newQuestions, editQuestion }) {
  const[options, setOptions] = useState([""])
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [newOptions, setNewOptions] = useState([""])
  const [isDisable, setIsDisable] = useState(false);
  const {lessonId} = useParams();
  const {pathname} = useLocation();


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
    if(pathname === `/admin/add-test/${lessonId}`) {
      setOptions(questions[questions.findIndex((el) => el.id === id)].options);
    } else {
      if(newQuestions.length) {
        setQuestion(questions[questions.findIndex((el) => el.id === id)].question)
        setAnswer(questions[questions.findIndex((el) => el.id === id)].answer)
        setNewOptions(questions[questions.findIndex((el) => el.id === id)].options)
        setOptions(questions[questions.findIndex((el) => el.id === id)].options)
         if(questions[questions.findIndex((el) => el.id === id)].testId) {
          setIsDisable(true)
        }
      }
    }
  }, [newQuestions])

  // update on card change
  useEffect(() => {
    if(questions.length){
      setQuestion(questions[questions.findIndex((el) => el.id === id)].question)
      setAnswer(questions[questions.findIndex((el) => el.id === id)].answer)
      setNewOptions(questions[questions.findIndex((el) => el.id === id)].options)
      setOptions(questions[questions.findIndex((el) => el.id === id)].options)
    }
  }, [cards])

   const removeQuestion = () => {
    //for questions
    let removed = questions.splice(questions.findIndex((el) => el.id === id), 1)
    let newQuestions = questions.filter(item => item.id !== removed.id);
    setQuestions(newQuestions)
    //for cards
    let removedCard = cards.splice(cards.findIndex((el) => el.id === id), 1);
    let newCards = cards.filter(item => item.id !== removedCard.id);
    setCards(newCards)
  }
  
  function addQuestion() {
    setOptions((cur) => [...cur, ""]);
    setFormError(false)
  }

  return (
    <>
    {formError && <p className='error-message test-error'>Please fill out all the input.</p>}
      <div className="question-header">
        <h4 className="question-title">MCQ Question</h4>
        {!isDisable && <img src='/img/minus-circle-outline.svg' alt='minus image' onClick={removeQuestion}/>}
      </div>
      <div className='question-container'>
          <div>
              <input
                  className='default-input-variation'
                  placeholder='Question'
                  value={question}
                  onChange={(e) => changeQuestion(e)}
                  disabled={isDisable}
            />
          </div>
        <button><img src='/img/green-camera.svg' alt='photo icon' /> <h4>Add photo</h4></button>
      </div>
      <div className='test-answers-wrapper'>
            <div className='test-correct-answer'>
            <h4>Write correct answer in this field</h4>
             <div className='test-answer-input-field'>
                <input className='default-input-variation' 
                placeholder='Correct answer' 
                value={answer} 
                onChange={(e) => changeAnswer(e)} 
                disabled={isDisable}
                />
                 {!isDisable && <img src='/img/minus-circle-outline.svg' alt='minus image' onClick={() => setAnswer('')} />}
             </div>
             <span>Answer will be mixed for users</span>
            </div>
            <div className='option-answers'>
                  {options.length > 0 && options.map((item, index) => 
                    // isDisable 
                    // ? <input className='default-input-variation incorrect-option' value={item} disabled={isDisable} />
                    <InputComponent 
                         index={index} 
                         questions={questions} id={id} 
                         setFormError={setFormError} 
                         options={options}
                         setOptions={setOptions}
                         newOptions={newOptions}
                         setNewOptions={setNewOptions}
                         item={item}
                         isDisable={isDisable}
                         newQuestions={newQuestions}
                         />

                    )}
             </div>
             {!isDisable && 
             <button className="add-new-course" 
             onClick={addQuestion}><img src='/img/plus.svg' alt='add icon' /> 
             <span>Add new answer</span></button>}
        </div>
        {cards[cards.findIndex((el) => el.id === id)].question && <div className="question-btn-contaianer">
                <button onClick={() => editQuestion(questions[questions.findIndex((el) => el.id === id)].id)}>Edit Question</button>
                <button onClick={() => deleteQuestion(questions[questions.findIndex((el) => el.id === id)].id)}>Delete Question</button>
            </div>}
    </>
  );
}

function InputComponent({ index, questions, id, setFormError, options, setOptions, newOptions, setNewOptions, isDisable, newQuestions }) {
  const [question, setQuestion] = useState("");
  function onQuestionChange(e) {
    setQuestion(e.target.value);
    questions[questions.findIndex((el) => el.id === id)].options[index] =
      e.target.value;
      options[index] = e.target.value
      setFormError(false)
  }

  useEffect(() => {
        if (newOptions.length > 0) {          
            setQuestion(newOptions[index])
            if(questions.length) {
              questions[questions.findIndex((el) => el.id === id)].options = newOptions
            }
        }
    }, [newOptions])

   function removeItem () {
    let removedItem = newOptions.splice(index, 1);
    let newItems = newOptions.filter((el)=> el !== removedItem)
    setNewOptions(newItems)
    let removedList = options.splice(index, 1);
    let newLists = options.filter((el, index )=> index !== removedList)
    setOptions(newLists)
  }

  return (
        <div className='test-answer-input-field' key={index}>
          {
          questions[questions.findIndex((el) => el.id === id)]?.testId
          ? 
          (newOptions[index] !== undefined ) && <input
              className='default-input-variation incorrect-option'
              placeholder='Incorrect answer' 
              disabled={isDisable}
              value={question} 
              onChange={(e) => onQuestionChange(e)}
            />
          : <input
              className='default-input-variation incorrect-option'
              placeholder='Incorrect answer' 
              disabled={isDisable}
              value={question} 
              onChange={(e) => onQuestionChange(e)}
            />
          }
            {!isDisable && (newOptions.length > 1 && <img src='/img/minus-circle-outline.svg' alt='minus image' onClick={removeItem} />)}
        </div>
  );
}

export default AddTest
