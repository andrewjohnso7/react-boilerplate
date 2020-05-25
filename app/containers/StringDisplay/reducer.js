import { FETCH_STRINGS, API_SUCCESS, API_FAILURE } from './constants';

const initialState = {
  strings: [
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
      console.log('Fetching them strings');
      return {
        ...state,
      };
    case API_SUCCESS: {
      return {
        ...state,
        items: action.payload,
      };
    }
    default:
      return state;
  }
}
