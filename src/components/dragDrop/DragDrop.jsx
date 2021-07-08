import { useState } from 'react'
import { useDropzone } from 'react-dropzone'

const DragDrop = ({
  onChange = () => {},
  type,
  fileType,
  className,
  setVideo,
  text,
  img,
  editText
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

  return (
    <DragDropComponent
      getInputProps={getInputProps}
      getRootProps={getRootProps}
      fileChange={fileChange}
      files={files}
      setFiles={setFiles}
      className={className}
      type={type}
      setVideo={setVideo}
      text={text}
      img={img}
      editText={editText}
    />
  )
}

function DragDropComponent ({
  getInputProps,
  getRootProps,
  fileChange,
  files,
  setFiles,
  className,
  type,
  setVideo,
  text,
  img,
  editText
}) {
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
              ) : text === text ? (
                <p>{text}</p>
              ) : (
                <img src='/img/camera-outline.svg' alt='camera icon' />
              )}
            </div>
          </>
        ) : (img ?
          <>
            <img className='avatar' src={img} alt='img' />
            <div className='editimg'>
              <p>{editText} </p>
            </div>
          </>
        :  <>
            {type === 'video' ? (
              <p className='videoName'>Choose video</p>
            ) : text ? (
              <p>{text}</p>
            ) : (
              <h6 className='text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px'>
                Drag & Drop files in this area or Click Here to attach video
                cover
              </h6>
            )}
          </>  
        )}
      </div>
      {files && (
        <img
          src='/img/close-outline.svg'
          className='drag-drop-close'
          onClick={() => setFiles(!files)}
          alt='drag_drop_img_close'
        />
      )}
    </div>
  )
}

export default DragDrop
