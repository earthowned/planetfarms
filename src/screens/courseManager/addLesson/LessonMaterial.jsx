import DragDrop from '../../../components/dragDrop/DragDrop'
import Material from '../../../components/material/Material'

const LessonMaterial = ({ material, setMaterial }) => {
  const matData = (mData) => {
    setMaterial(() => [...material, { mData }])
  }
  return (
    <div className='admin-lesson-materials-container'>
      <h1>Materials</h1>
      {material.length !== 0 ? (
        <div className='material'>
          {material.map((mater, i) => {
            console.log(mater)
            return (
              <Material
                key={i}
                name={mater?.mData ? mater?.mData?.name : mater?.name}
              />
            )
          })}
        </div>
      ) : (
        <p>You dont have any materials in lesson Add it for your users.</p>
      )}
      <DragDrop
        fileType='application/pdf'
        className='secondary-btn addMaterial'
        text='Add Materials'
        onChange={(mat) => matData(mat)}
      />
    </div>
  )
}

export default LessonMaterial
