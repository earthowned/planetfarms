import { useState, useEffect } from "react";

function InputComponent({
  index,
  questions,
  id,
  setFormError,
  options,
  setOptions,
  newOptions,
  setNewOptions,
}) {
  const [question, setQuestion] = useState("");

  function onQuestionChange(e) {
    setQuestion(e.target.value);
    questions[questions.findIndex((el) => el.id === id)].options[index] =
      e.target.value;
    options[index] = e.target.value;
    setFormError(false);
  }

  function removeItem() {
    const removedItem = options.splice(index, 1);
    const newItems = options.filter((el) => el !== removedItem);
    setOptions(newItems);
  }

  useEffect(() => {
    if (options.length > 0) {
      setQuestion(options[index]);
      if (questions.length) {
        questions[questions.findIndex((el) => el.id === id)].options = options;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  return (
    <div className="test-answer-input-field" key={index}>
      <input
        className="default-input-variation incorrect-option"
        placeholder="Incorrect answer"
        value={question}
        onChange={(e) => onQuestionChange(e)}
      />
      {options.length === 1 ? (
        <img src="/img/minus-circle-outline.svg" alt="" />
      ) : (
        <img src="/img/minus-circle-outline.svg" alt="" onClick={removeItem} />
      )}
    </div>
  );
}

export default InputComponent;
