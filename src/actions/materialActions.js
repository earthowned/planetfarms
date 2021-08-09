import { Axios, ADD_MATERIAL, GET_MATERIAL } from '../utils/urlConstants'
import { postApi } from '../utils/apiFunc'

import {
  MATERIAL_CREATE_REQUEST,
  MATERIAL_CREATE_SUCCESS,
  MATERIAL_CREATE_FAIL
} from '../constants/materialConstants'

export const createMaterial = (material, lessonId) => async (dispatch) => {
  const materialData = new FormData()
  materialData.append('material', material)
  materialData.append('lessonId', lessonId)
  try {
    dispatch({ type: material.MATERIAL_CREATE_REQUEST })
    const config = {
      Headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    const { data } = await postApi(dispatch, ADD_MATERIAL, materialData, config)
    dispatch({ type: MATERIAL_CREATE_SUCCESS, payload: data })
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
    const { data } = await Axios.delete(GET_MATERIAL + `/${id}`)
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
