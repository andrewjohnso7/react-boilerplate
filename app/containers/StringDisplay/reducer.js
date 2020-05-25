import {
  FETCH_STRINGS,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  UPDATING_STRINGS,
  UPDATE_SUCCESS,
  UPDATE_FAILED,
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
  console.log('in the reducer ', action, state);
  switch (action.type) {
    case FETCH_STRINGS:
      return {
        ...state,
      };
    case FETCH_SUCCESS: {
      return {
        ...state,
        list: action.list,
      };
    }
    case UPDATING_STRINGS: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
