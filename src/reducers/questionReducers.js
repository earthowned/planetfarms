import {
  QUESTION_DELETE_FAIL,
  QUESTION_DELETE_REQUEST,
  QUESTION_DELETE_SUCCESS,
  QUESTION_LIST_FAIL,
  QUESTION_LIST_REQUEST,
  QUESTION_LIST_SUCCESS,
  QUESTION_UPDATE_FAIL,
  QUESTION_UPDATE_REQUEST,
  QUESTION_UPDATE_SUCCESS,
} from "../constants/questionConstants";

export const questionDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case QUESTION_DELETE_REQUEST:
      return { ...state, loading: true, success: false };
    case QUESTION_DELETE_SUCCESS:
      return { loading: false, success: true };
    case QUESTION_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const questionUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case QUESTION_UPDATE_REQUEST:
      return { ...state, loading: true, success: false };
    case QUESTION_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case QUESTION_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const questionListReducer = (
  state = { fetchedQuestions: [] },
  action
) => {
  switch (action.type) {
    case QUESTION_LIST_REQUEST:
      return { loading: true, QUESTION: [] };
    case QUESTION_LIST_SUCCESS:
      return {
        loading: false,
        fetchedQuestions: action.payload.questions,
        pages: action.payload.pages,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
      };
    case QUESTION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
