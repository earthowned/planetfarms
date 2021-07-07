import { useState } from 'react'
import './NewsCreateModal.scss'
import Button from '../button/Button'
import { useDispatch } from 'react-redux'
import { savetextDetail } from '../../actions/newsActions'
import CollectionModalHeader from './CollectionModalHeader'
import { InputFields, ErrorText, TextArea } from '../formUI/FormUI'

const CreateText = ({ textActive, setTextActive }) => {
  const [collectionTitle, setCollectionTitle] = useState()
  const [collectionDescription, setCollectionDescription] = useState()

  const [collectionTitleError, setCollectionTitleError] = useState()
  const [collectionDescriptionError, setCollectionDescriptionError] = useState()

  const collectionTitleChange = (e) => {
    setCollectionTitle(e.target.value)
    setCollectionTitleError(false)
  }
  const collectionDescriptionChange = (e) => {
    setCollectionDescription(e.target.value)
    setCollectionDescriptionError(false)
  }

  const dispatch = useDispatch()
  const addText = () => {
    if (!collectionTitle) setCollectionTitleError(true)
    if (!collectionDescription) setCollectionDescriptionError(true)
    if (collectionTitle && collectionDescription) {
      dispatch(savetextDetail({ collectionTitle, collectionDescription }))
      setTextActive(false)
    }
  }
  return (
    <>
      {textActive && (
        <div className='collection-modal-container'>
          <div>
            <div className='collection-modal-inner-container'>
              <CollectionModalHeader title='Add text' clickHandler={setTextActive} />
              <div className='photo-input-container'>
                <InputFields
                  type='text'
                  className='default-input-variation'
                  placeholder='Collection title'
                  value={collectionTitle}
                  onChange={(e) => collectionTitleChange(e)}
                />
                <ErrorText className='error-message' error={collectionTitleError} message='Please enter Video Title' />
                <br />
                <TextArea
                  className='default-input-variation'
                  id='text-area-variation-2'
                  placeholder='Type text here '
                  value={collectionDescription}
                  onChange={(e) => collectionDescriptionChange(e)}
                />
                <ErrorText className='error-message' error={collectionDescriptionError} message='Please enter Video Description' />
              </div>
              <Button name='Add block' onClick={addText} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateText
