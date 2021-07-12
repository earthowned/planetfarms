import DragDrop from '../../../components/dragDrop/DragDrop'

const LessonMaterial = ({ material, setMaterial }) => {
  return (
    <div className='admin-lesson-materials-container'>
      <h1>Materials</h1>
      {material ? (
        <p>{material.name}</p>
      ) : (
        <p>You dont have any materials in lesson Add it for your users.</p>
      )}
      <DragDrop
        fileType='application/pdf'
        className='secondary-btn addMaterial'
        text='Add Materials'
        onChange={(mat) => setMaterial(mat)}
      />
    </div>
  )
}

export default LessonMaterial
