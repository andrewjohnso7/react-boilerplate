import fetchStringsReducer from '../reducer';
import { FETCH_STRINGS, FETCH_SUCCESS } from '../constants';

describe('fetchStringsReducer', () => {
  it('returns the initial state when defaulting', () => {
    expect(fetchStringsReducer(undefined, {})).toMatchSnapshot();
  });
  it('handles the FETCH_STRINGS action', () => {
    expect(fetchStringsReducer({}, FETCH_STRINGS)).toMatchSnapshot();
  });
  it('handles the FETCH_SUCCESS action', () => {
    expect(fetchStringsReducer({}, FETCH_SUCCESS)).toMatchSnapshot();
  });
});
