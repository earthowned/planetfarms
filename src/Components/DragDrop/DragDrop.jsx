import { useState } from 'react'
import { useDropzone } from 'react-dropzone'

const DragDrop = ({ onChange }) => {
  const [files, setFiles] = useState()
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
      setFiles(acceptedFiles[0])
      onChange(acceptedFiles[0])
    }
  })
  const fileChange = (e) => {
    const selectedFile = e.target.files[0]
    Object.assign(selectedFile, { preview: URL.createObjectURL(selectedFile) })
    setFiles(selectedFile)
    onChange(selectedFile)
  }
  return (
    <div className='drag-drop' {...getRootProps()}>
      <input {...getInputProps()} onChange={(e) => fileChange(e)} />
      {(files != null)
        ? <img className='avatar' name='avatar' src={files.preview} alt='files[0].preview' />
        : <h6 className='text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px'>
          Drag and Drop files in this area or Click Here to attach
        </h6>}
    </div>
  )
}

export default DragDrop
