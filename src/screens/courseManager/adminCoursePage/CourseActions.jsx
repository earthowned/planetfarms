/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import useHideOnClick from "../../../utils/useHideOnClick";

const CourseActions = ({
  setIsEditCourse,
  courseId,
  deleteCourse,
  history,
  dispatch,
}) => {
  const [actionActive, setActionActive] = useState(false);
  const domNode = useHideOnClick(() => {
    setActionActive(false);
  });

  const destroyCourse = async () => {
    dispatch(deleteCourse(courseId, history));
  };

  return (
    <div className="actions actions__course" ref={domNode}>
      <button
        type="button"
        className="secondary-btn lesson-btn"
        onClick={() => setActionActive(!actionActive)}
      >
        <img src="/img/more-horizontal.svg" alt="horizontal icon" />
      </button>
      {actionActive && (
        <ul className={actionActive ? "show" : "hide"}>
          <li
            onClick={() => {
              setIsEditCourse(true);
              setActionActive(!actionActive);
            }}
          >
            Edit
          </li>
          <li
            onClick={() => {
              destroyCourse();
              setActionActive(!actionActive);
            }}
          >
            Delete
          </li>
        </ul>
      )}
    </div>
  );
};

export default CourseActions;
