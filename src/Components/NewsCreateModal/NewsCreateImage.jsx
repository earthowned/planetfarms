import { useState } from 'react'
import './news-create-modal.css'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux'
import { saveimageDetail } from '../../actions/newsActions'
import DragDrop from '../DragDrop/DragDrop'
import CollectionModalHeader from './CollectionModalHeader'
import { InputFields } from '../FormUI/FormUI'

const CreateImage = ({ getRootProps, getInputProps, files, setFiles, imageActive, setImageActive }) => {
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
      dispatch(saveimageDetail({ addDesctiption, imageDescription, file: files }))
      setImageActive(false)
    }
  }

  return (
    <>
      {imageActive && (
        <div className='collection-modal-container'>
          <div>
            <div className='collection-modal-inner-container'>
              <CollectionModalHeader title='Add photo' setImageActive={setImageActive} />
              <DragDrop getInputProps={getInputProps} getRootProps={getRootProps} files={files} onChange={setFiles} />
              <div className='description'>
                <label>Add photo description</label> <ToggleSwitch setAddDesctiption={setAddDesctiption} addDesctiption={addDesctiption} />
              </div>
              {addDesctiption
                ? <div className='photo-input-container'>
                  <InputFields
                    placeholder='Photo description'
                    onChange={(e) => imageDescriptionChange(e)}
                    className='default-input-variation'
                  />
                  <p className='error-message'>{imageDescriptionError ? 'Please enter Video Description' : ' '} </p>
                  </div>
                : <div />}
              <Button name='Add block' clickHandler={addImage} />
            </div>
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
