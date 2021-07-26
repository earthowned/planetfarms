import { useForm } from 'react-hook-form'
import { updateText } from '../../../actions/textActions'
import { useDispatch } from 'react-redux'

import Button from '../../../components/button/Button'
import ModelHandler from './ModelHandler'
import {
  InputFields,
  ErrorText,
  TextArea
} from '../../../components/formUI/FormUI'
import '../../../components/newsCreateModal//NewsCreateModal.scss'

const EditText = ({
  editTextModel,
  setEditTextModel,
  lessonData,
  setLessonData,
  editId,
  textData,
  editFetchedData,
  refetch
}) => {
  const { register, errors, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const addText = ({ textHeading, textDescription }) => {
    editFetchedData
      ? dispatch(
          updateText(
            editId,
            textHeading,
            textDescription,
            setEditTextModel,
            refetch
          )
        )
      : editUnSavedTextOnDb()

    function editUnSavedTextOnDb () {
      setLessonData(
        lessonData.map((data) =>
          data.itemId === editId
            ? {
                ...data,
                textHeading,
                textDescription
              }
            : data
        )
      )
      setEditTextModel(false)
    }
  }

  const editingTextData =
    textData?.find((text) => text.id === editId) ||
    lessonData?.find((text) => text.itemId === editId)
  return (
    <>
      {editTextModel && (
        <div className='collection-modal-container addBlock addBlock__text'>
          <div className='block'>
            <div className='collection-modal-inner-container'>
              <ModelHandler title='Add text' clickHandler={setEditTextModel} />
              <div className='photo-input-container'>
                <InputFields
                  type='text'
                  className='default-input-variation'
                  placeholder='Text Heading (Optional)'
                  name='textHeading'
                  ref={register}
                  defaultValue={editingTextData?.textHeading}
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
                  ref={register({
                    required: {
                      value: true,
                      message: 'Please enter a text description'
                    }
                  })}
                  defaultValue={editingTextData?.textDescription}
                />
                <ErrorText
                  className='errorMsg'
                  message={
                    errors.textDescription && errors.textDescription.message
                  }
                />
              </div>
              <Button
                className='add'
                name='Edit Text Block'
                onClick={handleSubmit(addText)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EditText