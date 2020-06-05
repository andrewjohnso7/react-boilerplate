import {
  FETCH_SUCCESS,
  FETCH_FAILURE,
  UPDATE_FAILED,
  UPDATE_SUCCESS,
} from './constants';

const initialState = {
  list: [
    { id: 5, body: 'Aang' },
    { id: 4, body: 'Katara' },
    { id: 3, body: 'Toph' },
    { id: 2, body: 'Sokka' },
    { id: 1, body: 'Appa' },
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESS: {
      return {
        ...state,
        list: action.list,
      };
    }
    case FETCH_FAILURE: {
      return {
        ...state,
        error: action.error,
      };
    }
    case UPDATE_SUCCESS: {
      return {
        ...state,
        added: action.updated,
      };
    }
    case UPDATE_FAILED: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
