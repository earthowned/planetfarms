import { useState } from 'react'
import './news-create-modal.css'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux'
import { saveimageDetail } from '../../actions/newsActions'
import DragDrop from './DragDrop'
import CollectionModalHeader from './CollectionModalHeader'

const CreateImage = ({ getRootProps, getInputProps, files, imageActive, setImageActive }) => {
  const [imageDescription, setImageDescription] = useState()
  const [addDesctiption, setAddDesctiption] = useState(false)

  const [imageDescriptionError, setImageDescriptionError] = useState()

  const imageDescriptionChange = (e) => {
    setImageDescription(e.target.value)
    setImageDescriptionError(false)
  }

  const dispatch = useDispatch()
  const addImage = () => {
    if (addDesctiption && !imageDescription) setImageDescriptionError(true)
    if (!imageDescriptionError) {
      dispatch(saveimageDetail({ addDesctiption, imageDescription }))
      setImageActive(false)
    }
  }
  return (
    <>
      {imageActive && (
        <div className='collection-modal-container'>
          <div className='collection-modal-inner-container'>
            <CollectionModalHeader title='Add photo' setImageActive={setImageActive} />
            <DragDrop getInputProps={getInputProps} getRootProps={getRootProps} files={files} />
            <div className='description'>
              <label>Add photo description</label> <ToggleSwitch setAddDesctiption={setAddDesctiption} addDesctiption={addDesctiption} />
            </div>
            {addDesctiption
              ? <div className='photo-input-container'>
                <input
                  className='default-input-variation'
                  placeholder='Photo description'
                  value={imageDescription}
                  onChange={(e) => imageDescriptionChange(e)}
                />
                <p className='error-message'>{imageDescriptionError ? 'Please enter Video Description' : ' '} </p>
              </div> : <div />}
            <Button name='Add block' clickHandler={addImage} />
          </div>
        </div>
      )}
    </>
  )
}

function ToggleSwitch ({ setAddDesctiption, addDesctiption }) {
  return (
    <>
      <div className='toggle-main-container'>
        <div
          onClick={() => setAddDesctiption(!addDesctiption)}
          className={`${addDesctiption ? 'toggle-item active' : 'toggle-item'}`}
        />
        <div className='toggle-container' />
      </div>
    </>
  )
}

export default CreateImage
