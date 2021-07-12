import { createMaterial } from '../../../actions/materialActions'

export const addMaterial = function ({ material: mate, lessonId, dispatch }) {
  let i = 0

  const materialData = mate.length
  for (i; i < materialData; i++) {
    const material = mate[i].mData
    if (material) {
      return dispatch(createMaterial(material, lessonId))
    }
  }
}
