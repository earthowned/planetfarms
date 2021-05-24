import React, {useState} from 'react'
import { useDropzone } from 'react-dropzone'
import { useHistory } from 'react-router';
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch'

import "./new-course-create-modal.css";

const NewCourseCreateModal = ({collectionAdded, clickHandler}) => {
    const [files, setFiles] = useState()

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
      setFiles(acceptedFiles[0])
    }
  })

  const fileChange = (e) => {
    const selectedFile = e.target.files[0]
    Object.assign(selectedFile, {
      preview: URL.createObjectURL(selectedFile)
    })
    setFiles(selectedFile)
  }

  const history = useHistory();

  const createFunc = () => {
    history.push('/admin/coursepage')
    clickHandler(false)
  }

    return (
         <div className='new-course-modal-container'>
        <div className='new-course-modal-inner-container'>
          <div className='new-course-modal-header'>
            <h4>Usual course</h4>
            <img src='/img/close-outline.svg' onClick={() => clickHandler(false)} alt='close-icon' />
          </div>
          <div className='drag-drop' {...getRootProps()}>
            <input {...getInputProps()} onChange={(e) => fileChange(e)} />
            {(files != null)
              ? <img className='avatar' name='avatar' src={files.preview} alt='files[0].preview' />
              : <h6 className='text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px'>
                Drag and Drop files in this area or Click Here to attach
              </h6>}
          </div>
              <div className='new-course-input-container'>
                <input className='default-input-variation' placeholder='Collection title' /> <br />
                <select className='default-input-variation' placeholder='Collection title'>
                  <option>Select category</option>
                  <option>Travelling</option>
                </select>
                <textarea placeholder="Course description" />
                <div className="new-course-toggle">
                    <h4>Free course</h4>
                    <ToggleSwitch />
                </div>
                <input className='default-input-variation' placeholder='Course price' />
              </div>
              <button className='default-btn btn-size' onClick={() => createFunc()}>Create course</button>
        </div>
      </div>
    )
}

export default NewCourseCreateModal
