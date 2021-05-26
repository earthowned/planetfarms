import './news-create-modal.css'

const DragDrop = ({ getInputProps, getRootProps, files, setFiles }) => {
  return (
    <div className='drag-drop-container'>
    <div className="drag-drop" {...getRootProps()}>
      <input {...getInputProps()} />
      {files.length > 0
        ? (<>
          <img className='avatar' src={files[0].preview} alt='files[0].preview' />
          <div className="drag-drop-icon-container"><img src="/img/camera-outline.svg" alt="camera icon"/></div>
          </>
        )
        : (
          <h6 className='text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px'>
            Drag & Drop files in this area or Click Here to attach video cover
          </h6>
        )
      }
    </div>
    {files.length > 0 && <img src="/img/close-outline.svg" className="drag-drop-close" onClick={() => setFiles([])} />}
    </div>
  )
}

export default DragDrop
