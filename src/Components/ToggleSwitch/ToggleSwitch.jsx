import './toggle.scss'

function ToggleSwitch ({ onClick, active }) {
  return (
    <>
      <div className='toggle' onClick={onClick}>
        <div className={`${active ? 'toggle-item active' : 'toggle-item'}`} />
        <div className='toggle-container' />
      </div>
    </>
  )
}

export default ToggleSwitch
