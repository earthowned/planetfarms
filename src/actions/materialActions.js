import { Axios, ADD_MATERIAL } from '../utils/urlConstants'
import {
  MATERIAL_CREATE_REQUEST,
  MATERIAL_CREATE_SUCCESS,
  MATERIAL_CREATE_FAIL,
} from '../constants/materialConstants'

export const createMaterial = (material, lessonId) => async (dispatch) => {
  const materialData = new FormData()
  materialData.append('material', material)
  materialData.append('lessonId', lessonId)

  try {
    dispatch({ type: MATERIAL_CREATE_REQUEST })
    const config = {
      Headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    const { data } = await Axios.post(ADD_MATERIAL, materialData, config)
    dispatch({ type: MATERIAL_CREATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: MATERIAL_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
