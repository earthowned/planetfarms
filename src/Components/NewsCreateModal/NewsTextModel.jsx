import { useState } from 'react'
import './news-create-modal.css'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux'
import { savetextDetail } from '../../actions/newsActions'
import CollectionModalHeader from './CollectionModalHeader'

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
          <div className='collection-modal-inner-container'>
            <CollectionModalHeader title='Add text' setTextActive={setTextActive} />
            <div className='photo-input-container'>
              <input
                className='default-input-variation'
                placeholder='Collection title'
                value={collectionTitle}
                onChange={(e) => collectionTitleChange(e)}
              />
              <p className='error-message'>{collectionTitleError ? 'Please enter Video Description' : ' '} </p>

              <br />
              <textarea
                className='default-input-variation text-area-variation-2'
                placeholder='Type text here '
                value={collectionDescription}
                onChange={(e) => collectionDescriptionChange(e)}
              />
              <p className='error-message'>{collectionDescriptionError ? 'Please enter Video Description' : ' '} </p>
            </div>
            <Button name='Add block' clickHandler={addText} />
          </div>
        </div>
      )}
    </>
  )
}

export default CreateText
