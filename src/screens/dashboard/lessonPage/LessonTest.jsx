import moment from 'moment'
import { useEffect, useState } from 'react'

import { useHistory, useParams } from 'react-router-dom'
import Button from '../../../components/button/Button'
import { getApi, postApi } from '../../../utils/apiFunc'
import './LessonTest.scss'

const LessonTest = () => {
  const [start, setStart] = useState()
  const [results, setResults] = useState([])
  const [test, setTest] = useState(null)
  const history = useHistory()
  const { id } = useParams()

  const startTest = async (dispatch) => {
    const currentDate = moment().toDate().getTime().toString()
    const { data } = await postApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/user_tests/start`,
      { lessonId: id, startTime: currentDate })
    setStart(data)
  }

  useEffect(() => {
    if (start) {
      history.push({
        pathname: `/lesson-test-page/${start.id}`,
        state: { lessonId: id }
      })
    }
    getTestsResults()
  }, [start])

  const getTestsResults = async (dispatch) => {
    const { data } = await getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/user_tests/lesson/${id}`)
    setTest(data.test)
    if (data.tests !== undefined) {
      setResults(data.tests)
    }
  }
  return (
    <div className='lesson-test-panel'>
      <div className='lesson-test-panel-left'>
        {test &&
          <>
            <h3>Lesson test</h3>
            <p>
              Make a lesson test where you can use new information that you know
            </p>
            <div className='lesson-test-btn-wrapper'>
              <Button name='Start test' onClick={startTest} />
            </div>
          </>}
      </div>
      {test && <div className='lesson-test-panel-right'>
        <h4>My results</h4>
        {results.length
          ? <div className='test-result-container'>
            {results.length > 2 && <h4 className='show-more'>Show all results</h4>}
            <div>
              {
          results.splice(0, 2).map((item, index) => {
            return (
              <div className='test-attempt'>
                <div className='marks-obtained'>
                  <h4>{index === 0 ? 'First attempt' : 'Second attempt'}: <span>{item.marks}/{item.total_marks}</span></h4>
                  <p>{item.test_taken}</p>
                </div>
                {
                  item.is_passed
                    ? <button className='default-btn'>
                      Success
                    </button>
                    : <button className='default-btn red-bg'>
                      failed
                    </button>
                }
              </div>
            )
          })
          }
            </div>
          </div>
          : <div className='lesson-test-panel-right--attempts'>
            <h4>You didn't finish test yet.</h4>
            </div>}
      </div>}
    </div>
  )
}
export default LessonTest
