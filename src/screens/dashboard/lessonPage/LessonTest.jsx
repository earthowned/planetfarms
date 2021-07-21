import axios from 'axios'
import moment from 'moment'
import { useEffect, useState } from 'react'

import { useHistory, useParams } from 'react-router-dom'
import Button from '../../../components/button/Button'
import { configFunc } from '../../../utils/apiFunc'
import './LessonTest.scss'

const LessonTest = () => {
  const [start, setStart] = useState()
  const [results, setResults] = useState([])
  const [test, setTest] = useState(null)
  const history = useHistory()
  const {id} = useParams();

  const startTest = async () => {
    const currentDate = moment().toDate().getTime().toString()
    const config = configFunc()
    const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/user_tests/start`,
      { lessonId: id, startTime: currentDate }, config)
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

  const getTestsResults = async () => {
    const config = configFunc()
      const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user_tests/lesson/${id}`, config)

      setTest(data.test);
    console.log(data);
      if(data.tests !== undefined){
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
