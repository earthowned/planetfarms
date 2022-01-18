import React, { useEffect, useState } from "react";
import moment from "moment";
import { useHistory, useParams } from "react-router-dom";

import Button from "../../../components/button/Button";
import { postApi } from "../../../utils/apiFunc";
import useGetFetchData from "../../../utils/useGetFetchData";
import "./LessonTest.scss";

// eslint-disable-next-line react/display-name
const LessonTest = React.memo(({ title, setIsPassed }) => {
  const [start, setStart] = useState();
  const [results, setResults] = useState([]);
  const [test, setTest] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  const startTest = async (dispatch) => {
    const currentDate = moment().toDate().getTime().toString();
    const { data } = await postApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/user_tests/start`,
      { lessonId: id, startTime: currentDate }
    );
    setStart(data);
  };
  const { data: userTestData, isLoading } = useGetFetchData(
    "user_test_data_data",
    `${process.env.REACT_APP_API_BASE_URL}/api/user_tests/lesson/${id}`
  );
  const lessonName = title?.replace(/\s+/g, "-").toLowerCase();
  useEffect(async () => {
    if (start) {
      history.push(`/test-${lessonName}/${id}/${start.id}`);
    }
    setTest(userTestData?.test);
    setResults(userTestData?.tests);
  }, [userTestData, id, start, lessonName]);

  useEffect(() => {
    const passedData = [
      ...new Set(userTestData?.tests?.map((isPass) => isPass.is_passed)),
    ];
    setIsPassed(passedData.includes(true) || false);
  }, [userTestData]);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="lesson-test-panel">
          <div className="lesson-test-panel-left">
            {test && (
              <>
                <h3>Lesson test</h3>
                <p>
                  Make a lesson test where you can use new information that you
                  know
                </p>
                <div className="lesson-test-btn-wrapper">
                  <Button name="Start test" onClick={startTest} />
                </div>
              </>
            )}
          </div>
          {test && (
            <div className="lesson-test-panel-right">
              <h4>My results</h4>
              {results ? (
                <div className="test-result-container">
                  {results.length > 2 && (
                    <h4 className="show-more">Show all results</h4>
                  )}
                  <div>
                    {results.splice(0, 2).map((item, index) => {
                      return (
                        <div className="test-attempt" key={item.id}>
                          <div className="marks-obtained">
                            <h4>
                              {index === 0 ? "First attempt" : "Second attempt"}
                              :{" "}
                              <span>
                                {item.marks}/{item.total_marks}
                              </span>
                            </h4>
                            <p>{item.test_taken}</p>
                          </div>
                          {item.is_passed ? (
                            <button type="button" className="default-btn">
                              Success
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="default-btn red-bg"
                            >
                              failed
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="lesson-test-panel-right--attempts">
                  <h4>You didn&apos;t finish test yet.</h4>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
});
export default LessonTest;
