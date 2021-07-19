import Actions from './Actions'

import './Text.scss'
const Text = ({
  heading,
  desc,
  onRemove,
  id,
  setEditTextModel,
  modelPopUp
}) => {
  const poopUp = () => {
    modelPopUp(setEditTextModel(true), id)
  }
  return (
    <>
      {heading || desc ? (
        <div className='text'>
          <div className='block'>
            <h1>{heading}</h1>
            <p>{desc}</p>
          </div>
          <Actions onRemove={onRemove} id={id} poopUp={poopUp} />
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Text
