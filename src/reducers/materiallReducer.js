import * as material from "../constants/materialConstants";

export const materialCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case material.MATERIAL_CREATE_REQUEST:
      return { loading: true };
    case material.MATERIAL_CREATE_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case material.MATERIAL_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case material.MATERIAL_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const materialDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case material.MATERIAL_DELETE_REQUEST:
      return { loading: true };
    case material.MATERIAL_DELETE_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case material.MATERIAL_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
