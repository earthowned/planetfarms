/* eslint-disable no-shadow */
import { ADD_MATERIAL, GET_MATERIAL } from "../utils/urlConstants";
import { postApi, deleteApi } from "../utils/apiFunc";
import { getFormData } from "../utils/getFormData";
import * as MATERIAL from "../constants/materialConstants";

export const createMaterial = (material, lessonId) => async (dispatch) => {
  const data = { material, lessonId };
  const materialData = getFormData(data);
  try {
    dispatch({ type: MATERIAL.MATERIAL_CREATE_REQUEST });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await postApi(
      dispatch,
      ADD_MATERIAL,
      materialData,
      config
    );
    dispatch({ type: MATERIAL.MATERIAL_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MATERIAL.MATERIAL_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteMaterial = (id, refetch) => async (dispatch) => {
  try {
    dispatch({ type: MATERIAL.MATERIAL_DELETE_REQUEST });
    const { data } = await deleteApi(`${GET_MATERIAL}/${id}`);
    dispatch({ type: MATERIAL.MATERIAL_DELETE_SUCCESS, payload: data });
    refetch();
  } catch (error) {
    dispatch({
      type: MATERIAL.MATERIAL_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
