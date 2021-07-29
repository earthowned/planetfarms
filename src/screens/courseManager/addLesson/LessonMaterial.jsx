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

  return (
    <div className='admin-lesson-materials-container'>
      <h1>Materials</h1>
      {material?.length > 0 ? (
        <div className='material'>
          {material.map((mater, i) => {
            return (
              <Material
                key={i}
                name={mater?.mData ? mater?.mData?.name : mater?.material}
              >
                <a
                  href={
                    mater?.mData
                      ? mater?.mData?.preview
                      : `${MATERIAL}${mater?.material}`
                  }
                  download={mater?.mData ? mater?.mData?.name : mater.name}
                  target={mater?.mData ? '_self' : '_blank'}
                >
                  <div>
                    <img src='/img/download-icon.svg' alt='download icon' />{' '}
                    <span>Download</span>
                  </div>
                </a>
                <div
                  onClick={(e) =>
                    mater?.mData
                      ? removeLocalMaterial(e)
                      : removeMaterial(mater?.id)}
                  name={mater?.mData ? mater?.mData?.preview : mater?.name}
                >
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
        fileType='application/pdf'
        className='secondary-btn addMaterial'
        text='Add Materials'
        onChange={(mat) => matData(mat)}
      />
    </div>
  )
}

export default LessonMaterial
