import './news-create-modal.css'

const DragDrop = ({ getInputProps, getRootProps, files }) => {
  return (
    <div className='drag-drop' {...getRootProps()}>
      <input {...getInputProps()} />
      {files.length > 0 ? (
        <img className='avatar' src={files[0].preview} alt='files[0].preview' />
      ) : (
        <h6 className='text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px'>
          Drag & Drop files in this area or Click Here to attach video cover
        </h6>
      )}
    </div>
  )
}

export default DragDrop
