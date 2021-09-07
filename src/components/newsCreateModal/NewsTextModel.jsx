import { useForm } from 'react-hook-form'

import Button from '../button/Button'
import CollectionModalHeader from './CollectionModalHeader'
import { InputFields, ErrorText, TextArea } from '../formUI/FormUI'
import './NewsCreateModal.scss'

const CreateText = ({
  textActive,
  setTextActive,
  data,
  setData,
  editData,
  setEditData,
  editFunc
}) => {
  const { register, errors, handleSubmit } = useForm()
  const addText = ({ textHeading, textDescription }) => {
    const itemId =
      data.length === 0 ? data.length + 1 : data[data.length - 1].itemId + 1

    if (textHeading.length !== 0 || textDescription.length !== 0) {
      const textData = [
        ...data,
        {
          itemId,
          textHeading,
          textDescription
        }
      ]
      setData(textData)
    }
    setTextActive(false)
  }

  const editText = ({ textHeading, textDescription }) => {
    if (textHeading.length !== 0 || textDescription.length !== 0) {
      editFunc({ textHeading, textDescription, id: editData[0].id })
      setEditData([])
    }
  }

  const closeModal = () => {
    setTextActive(false)
    setEditData([])
  }

  const editLocalData = ({ textHeading, textDescription }) => {
    if (editData.length !== 0) {
      editData[0].textHeading = textHeading
      editData[0].textDescription = textDescription
    }
    setTextActive(false)
    setEditData([])
  }
  return (
    <>
      {textActive && (
        <div className='collection-modal-container addBlock addBlock__text'>
          <div className='block'>
            <div className='collection-modal-inner-container'>
              <CollectionModalHeader
                title='Add text'
                clickHandler={closeModal}
              />
              <div className='photo-input-container'>
                <InputFields
                  type='text'
                  className='default-input-variation'
                  placeholder='Text Heading (Optional)'
                  name='textHeading'
                  ref={register}
                  defaultValue={
                    editData.length > 0 ? editData[0].textHeading : ''
                  }
                />
                <TextArea
                  className={`default-input-variation text-area-variation ${
                    errors.textDescription
                      ? 'textarea textarea__error'
                      : 'textarea'
                  }`}
                  placeholder='Text Description'
                  cols='3'
                  rows='7'
                  name='textDescription'
                  defaultValue={
                    editData.length > 0 ? editData[0].textDescription : ''
                  }
                  ref={register({
                    required: {
                      value: true,
                      message: 'Please enter a text description'
                    }
                  })}
                />
                <ErrorText
                  className='errorMsg'
                  message={
                    errors.textDescription && errors.textDescription.message
                  }
                />
              </div>

              {editData.length > 0 ? (
                <Button
                  className='add'
                  name='Edit Text Block'
                  onClick={handleSubmit(
                    editData[0]?.itemId ? editLocalData : editText
                  )}
                />
              ) : (
                <Button
                  className='add'
                  name='Add Text Block'
                  onClick={handleSubmit(addText)}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateText
