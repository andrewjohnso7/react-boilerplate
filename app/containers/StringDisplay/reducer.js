import { FETCH_STRINGS, FETCH_SUCCESS } from './constants';

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
    default:
      return state;
  }
}
