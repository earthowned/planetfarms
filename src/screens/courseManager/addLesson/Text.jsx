import Actions from './Actions'

import './Text.scss'
const Text = ({
  heading,
  desc,
  onRemove,
  id,
  setEditTextModel,
  modelPopUp,
  isEditable
}) => {
  const poopUp = () => {
    modelPopUp(id)
    setEditTextModel(true)
  }
  return (
    <>
      {heading || desc ? (
        <div className='text'>
          <div className='block'>
            <h1>{heading}</h1>
            <p>
              {desc} {id}
            </p>
          </div>
          {isEditable ? (
            <Actions onRemove={onRemove} id={id} poopUp={poopUp} />
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Text
