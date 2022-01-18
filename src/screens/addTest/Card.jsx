import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import SubjectiveQuestion from "./SubjectiveQuestion";
import MCQQuestion from "./MCQQuestion";

const ItemTypes = {
  CARD: "card",
};
const style2 = {
  border: ".5px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  borderRadius: "4px",
  cursor: "move",
};
const Card = ({
  id,
  type,
  index,
  moveCard,
  questions,
  setQuestions,
  formError,
  setFormError,
  setOptions,
  options,
  cards,
  setCards,
  deleteQuestion,
  newQuestions,
}) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const background = isDragging ? "#00C688" : "";
  drag(drop(ref));
  return (
    <div
      ref={ref}
      style={{ ...style2, background }}
      data-handler-id={handlerId}
    >
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
  );
};

export default Card;
