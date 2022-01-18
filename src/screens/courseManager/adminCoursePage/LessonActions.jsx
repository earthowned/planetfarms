/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useHideOnClick from "../../../utils/useHideOnClick";
import { deleteLesson } from "../../../actions/lessonActions";

const LessonActions = ({ id, courseId, refetch }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [actionActive, setActionActive] = useState(false);
  const [tests, setTests] = useState([]);
  const domNode = useHideOnClick(() => {
    setActionActive(false);
  });

  async function getTests() {
    const {
      data: { tests: response },
    } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/tests/lesson/${id}`
    );
    setTests(response);
  }

  useEffect(() => {
    getTests();
  }, []);

  const deleteLessonHandler = (lessonId) => {
    dispatch(deleteLesson(lessonId, refetch));
  };
  return (
    <div className="actions" ref={domNode}>
      <button
        type="button"
        className="secondary-btn lesson-btn"
        onClick={() => setActionActive(!actionActive)}
      >
        <img src="/img/more-horizontal.svg" alt="horizontal icon" />
      </button>
      {actionActive && (
        <ul className={actionActive ? "show" : "hide"}>
          {tests.length > 0 ? (
            <Link to={`/admin/edit-test/${id}`}>
              <li>Edit test</li>
            </Link>
          ) : (
            <Link to={`/admin/add-test/${id}`}>
              <li>Add test</li>
            </Link>
          )}
          <li
            onClick={() =>
              history.push({
                pathname: `/admin/lesson/edit/${id}`,
                state: {
                  courseId,
                },
              })
            }
          >
            Edit
          </li>
          <li
            onClick={() => {
              deleteLessonHandler(id);
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

export default LessonActions;
