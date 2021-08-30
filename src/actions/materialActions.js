import { ADD_MATERIAL, GET_MATERIAL } from '../utils/urlConstants'
import { postApi, deleteApi, fileHeader } from '../utils/apiFunc'

export const createMaterial = (material, lessonId) => async (dispatch) => {
  const materialData = new FormData()
  materialData.append('material', material)
  materialData.append('lessonId', lessonId)
  try {
    dispatch({ type: material.MATERIAL_CREATE_REQUEST })
    const { data } = await postApi(ADD_MATERIAL, materialData, fileHeader)
    dispatch({ type: material.MATERIAL_CREATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: material.MATERIAL_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const deleteMaterial = (id, refetch, material) => async (dispatch) => {
  try {
    dispatch({ type: material.MATERIAL_DELETE_REQUEST })
    const { data } = await deleteApi(GET_MATERIAL + `/${id}`)
    dispatch({ type: material.MATERIAL_DELETE_SUCCESS, payload: data })
    refetch()
  } catch (error) {
    dispatch({
      type: material.MATERIAL_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
