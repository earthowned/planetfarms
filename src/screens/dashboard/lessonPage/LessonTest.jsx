import Button from '../../../components/button/Button'

const LessonTest = () => {
  return (
    <div className='lesson-test-panel'>
      <div className='lesson-test-panel-left'>
        <h3>Lesson test</h3>
        <p>
          Make a lesson test where you can use new information that you know
        </p>
        <div className='lesson-test-btn-wrapper'>
          <Button name='Start text' />
        </div>
      </div>
      <div className='lesson-test-panel-right'>
        <h4>My results</h4>
        <div className='lesson-test-panel-right--attempts'>
          <h4>You didn't finish test yet.</h4>
        </div>
      </div>
    </div>
  )
}
export default LessonTest
