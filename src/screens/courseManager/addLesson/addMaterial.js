import { createMaterial } from '../../../actions/materialActions'

export const addMaterial = function ({ material: mate, lessonId, dispatch }) {
  const material = mate.mData
  return dispatch(createMaterial(material, lessonId))
}
