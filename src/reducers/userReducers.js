/* eslint-disable default-param-last */
import {
  ACCESS_TOKEN_FAIL,
  ACCESS_TOKEN_REQUEST,
  ACCESS_TOKEN_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_CONFIRM_CODE_REQUEST,
  USER_CONFIRM_CODE_SUCCESS,
  USER_CONFIRM_CODE_FAIL,
  USER_RESEND_CODE_REQUEST,
  USER_RESEND_CODE_SUCCESS,
  USER_RESEND_CODE_FAIL,
  USER_ATTR_CONFIRM_CODE_REQUEST,
  USER_ATTR_CONFIRM_CODE_SUCCESS,
  USER_ATTR_CONFIRM_CODE_FAIL,
  USER_ATTR_RESEND_CODE_REQUEST,
  USER_ATTR_RESEND_CODE_SUCCESS,
  USER_ATTR_RESEND_CODE_FAIL,
  USER_PASSWORD_CHANGE_REQUEST,
  USER_PASSWORD_CHANGE_SUCCESS,
  USER_PASSWORD_CHANGE_RESET,
  USER_PASSWORD_CHANGE_FAIL,
  USER_FORGOT_PWD_CONFIRM_CODE_REQUEST,
  USER_FORGOT_PWD_CODE_SUCCESS,
  USER_FORGOT_PWD_CODE_FAIL,
  USER_FORGOT_PWD_CODE_RESET,
  USER_FORGOT_PWD_RESEND_CODE_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_RESET,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_SEARCH_REQUEST,
  USER_SEARCH_SUCCESS,
  USER_SEARCH_FAIL,
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const accessTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case ACCESS_TOKEN_REQUEST:
      return { loading: true };
    case ACCESS_TOKEN_SUCCESS:
      return { loading: false, status: action.payload };
    case ACCESS_TOKEN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userConfirmCodeReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONFIRM_CODE_REQUEST:
      return { loading: true };
    case USER_CONFIRM_CODE_SUCCESS:
      return { loading: false, status: true };
    case USER_CONFIRM_CODE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userResendCodeReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_RESEND_CODE_REQUEST:
      return { loading: true };
    case USER_RESEND_CODE_SUCCESS:
      return { loading: false, status: true };
    case USER_RESEND_CODE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userAttrConfirmCodeReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ATTR_CONFIRM_CODE_REQUEST:
      return { loading: true };
    case USER_ATTR_CONFIRM_CODE_SUCCESS:
      return { loading: false, status: true };
    case USER_ATTR_CONFIRM_CODE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userAttrResendCodeReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ATTR_RESEND_CODE_REQUEST:
      return { loading: true };
    case USER_ATTR_RESEND_CODE_SUCCESS:
      return { loading: false, status: true };
    case USER_ATTR_RESEND_CODE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const changePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PASSWORD_CHANGE_REQUEST:
      return { loading: true };
    case USER_PASSWORD_CHANGE_SUCCESS:
      return { loading: false, status: true };
    case USER_PASSWORD_CHANGE_RESET:
      return { loading: false };
    case USER_PASSWORD_CHANGE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userForgotPwdConfirmCodeReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FORGOT_PWD_CONFIRM_CODE_REQUEST:
      return { loading: true };
    default:
      return state;
  }
};

export const userForgotPwdResendCodeReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FORGOT_PWD_RESEND_CODE_REQUEST:
      return { loading: true };
    default:
      return state;
  }
};

export const userForgotPwdCodeMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FORGOT_PWD_CODE_SUCCESS:
      return {
        loading: false,
        message: { type: "message", message: action.payload },
      };
    case USER_FORGOT_PWD_CODE_FAIL:
      return {
        loading: false,
        message: { type: "error", message: action.payload },
      };
    case USER_FORGOT_PWD_CODE_RESET:
      return {};
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload.users };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case USER_LIST_RESET:
      return { users: [] };
    case USER_SEARCH_REQUEST:
      return { loading: true, users: [] };
    case USER_SEARCH_SUCCESS:
      return {
        loading: false,
        searchUsers: action.payload.users,
        order: action.payload.order,
      };
    case USER_SEARCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case USER_UPDATE_RESET:
      return {
        user: {},
      };
    default:
      return state;
  }
};
