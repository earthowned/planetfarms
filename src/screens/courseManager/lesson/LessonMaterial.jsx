import { MATERIAL } from '../../../utils/urlConstants'
import DragDrop from '../../../components/dragDrop/DragDrop'
import Material from '../../../components/material/Material'

const LessonMaterial = ({
  material,
  setMaterial,
  removeMaterial,
  removeLocalMaterial
}) => {
  const matData = (mData) => {
    setMaterial(() => [...material, { mData }])
  }

  const removeItem = (e) => {
    const name = e.currentTarget.getAttribute('name')
    setMaterial(material.filter((item) => item?.mData?.name !== name))
  }

  return (
    <div className='admin-lesson-materials-container'>
      <h1>Materials</h1>
      {material?.length > 0 ? (
        <div className='material'>
          {material.map((mater, i) => {
            return (
              <Material key={i} name={mater?.mData?.name}>
                <a href={mater?.mData?.preview} download={mater?.mData?.name}>
                  <div>
                    <img src='/img/download-icon.svg' alt='download icon' />{' '}
                    <span>Download</span>
                  </div>
                </a>
                <div onClick={removeItem} name={mater?.mData?.name}>
                  <img src='/img/trash-icon.svg' alt='trash icon' />
                  <span>Delete</span>
                </div>
              </Material>
            )
          })}
        </div>
      ) : (
        <p>You dont have any materials in lesson Add it for your users.</p>
      )}
      <DragDrop
        fileType='application/pdf,.doc,.txt,application/vnd.ms-powerpoint,application/vnd.ms-excel'
        className='secondary-btn addMaterial'
        text='Add Materials'
        onChange={(mat) => matData(mat)}
        editImg
      />
    </div>
  )
}

export default LessonMaterial
