import { STATUS } from '@constants/index.js';

export const PRODUCT_ACTIONS = {
  FETCH_START: 'fetch_start',
  FETCH_SUCCESS: 'fetch_success',
  FETCH_ERROR: 'fetch_error',
  FETCH_TIMEOUT: 'fetch_timeout',
};

export const initialState = {
  status: STATUS.IDLE,
  data: [],
  error: null,
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.FETCH_START:
      return {
        status: STATUS.LOADING,
        data: [],
        error: null,
      };
    case PRODUCT_ACTIONS.FETCH_SUCCESS:
      return {
        status: STATUS.SUCCESS,
        data: action.payload,
        error: null,
      };
    case PRODUCT_ACTIONS.FETCH_ERROR:
      return {
        status: STATUS.ERROR,
        data: [],
        error: action.payload,
      };
    case PRODUCT_ACTIONS.FETCH_TIMEOUT:
      return {
        status: STATUS.TIMEOUT,
        data: [],
        error: null,
      };
    default:
      return state;
  }
};
