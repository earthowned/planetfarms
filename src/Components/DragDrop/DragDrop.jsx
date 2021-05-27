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
    }
  })
  const fileChange = (e) => {
    const selectedFile = e.target.files[0]
    Object.assign(selectedFile, { preview: URL.createObjectURL(selectedFile) })
    setFiles(selectedFile)
  }
  return (
    <div className='drag-drop-container'>
      <div className='drag-drop' {...getRootProps()} onChange={(e) => fileChange(e)}>
        <input {...getInputProps()} />
        {files
          ? (<>
            <img className='avatar' src={files.preview} alt='files[0].preview' />
            <div className='drag-drop-icon-container'><img src='/img/camera-outline.svg' alt='camera icon' /></div>
             </>
            )
          : (
            <h6 className='text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px'>
              Drag & Drop files in this area or Click Here to attach video cover
            </h6>
            )}
      </div>{files && <img src='/img/close-outline.svg' className='drag-drop-close' onClick={() => setFiles(null)} />}
    </div>
  )
}

export default DragDrop
