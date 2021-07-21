import { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import './DragDrop.scss'
const DragDrop = ({
  onChange = () => {},
  type,
  fileType,
  className,
  text,
  fetchImg,
  dataImg,
  dropFile,
  onClick = () => {}
}) => {
  const [files, setFiles] = useState()
  const { getRootProps, getInputProps } = useDropzone({
    accept: `${type ? `${type}/*` : fileType ? `${fileType}` : 'image/*'}`,
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

  useEffect(() => {
    dropFile && setFiles(dropFile)
  }, [dropFile])

  return (
    <DragDropComponent
      getInputProps={getInputProps}
      getRootProps={getRootProps}
      fileChange={fileChange}
      files={files}
      setFiles={setFiles}
      className={className}
      type={type}
      text={text}
      fetchImg={fetchImg}
      dataImg={dataImg}
      onClick={onClick}
    />
  )
}

const DragDropComponent = ({
  getInputProps,
  getRootProps,
  fileChange,
  files,
  setFiles,
  className,
  type,
  text,
  dataImg,
  onClick = () => {}
}) => {
  return (
    <div className={className ? `${className}` : 'drag-drop-container'}>
      <div
        className='drag-drop'
        {...getRootProps()}
        onChange={(e) => fileChange(e)}
      >
        <input {...getInputProps()} />

        {files ? (
          <>
            <img
              className='avatar'
              src={files.preview}
              alt='files[0].preview'
            />
            <div className='drag-drop-icon-container'>
              {type === 'video' ? (
                <p className='videoName'>{files.name}</p>
              ) : text ? (
                <p>{text}</p>
              ) : (
                <img src='/img/camera-outline.svg' alt='camera icon' />
              )}
            </div>
          </>
        ) : dataImg ? (
          <>
            <img className='avatar' src={dataImg} alt='files[0].preview' />
            <div className='drag-drop-icon-container'>
              <img src='/img/camera-outline.svg' alt='camera icon' />
              <h6 className='dragDropText'>{text}</h6>
            </div>
          </>
        ) : text ? (
          <h6 className='dragDropText ddtext'>{text}</h6>
        ) : (
          <h6 className='text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px'>
            Drag & Drop files in this area or Click Here to attach video cover
          </h6>
        )}
      </div>
      {files && (
        <img
          src='/img/close-outline.svg'
          className='drag-drop-close'
          onClick={() => {
            setFiles(null)
            onClick()
          }}
          alt='drag_drop_img_close'
        />
      )}
    </div>
  )
}

export default DragDrop
