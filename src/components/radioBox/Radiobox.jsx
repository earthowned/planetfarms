import { useEffect, useState } from "react";
import "./RadioBox.scss";

const Radiobox = ({ selected, onChange, text, value }) => {
  const [active, setActive] = useState(false);

  function changeCheckbox() {
    setActive(true);
    onChange(value);
  }

  useEffect(() => {
    if (selected !== value) setActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <>
      <div
        className={active ? "outer-box-radio active" : "outer-box-radio"}
        onClick={() => changeCheckbox()}
      >
        {active && <img src="/img/radio-tick.svg" alt="checkbox-for-terms" />}
      </div>
      <span>{text}</span>
    </>
  );
};

export default Radiobox;
