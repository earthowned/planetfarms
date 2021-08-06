import './ToggleSwitch.scss'

function ToggleSwitch ({ onClick, isToggle }) {
  return (
    <>
      <div className='toggle' onClick={onClick}>
        <div className={`${isToggle ? 'toggle-item active' : 'toggle-item'}`} />
        <div className='toggle-container' />
      </div>
    </>
  )
}

export default ToggleSwitch
