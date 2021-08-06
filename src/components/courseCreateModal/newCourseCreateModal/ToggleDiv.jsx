import ToggleSwitch from '../../toggleSwitch/ToggleSwitch'

const ToggleDiv = ({ placeholder, state, setState }) => {
  return (
    <div className='new-course-toggle'>
      <h4>{placeholder}</h4>
      <ToggleSwitch onClick={() => setState(!state)} isToggle={state} />
    </div>
  )
}
export default ToggleDiv
