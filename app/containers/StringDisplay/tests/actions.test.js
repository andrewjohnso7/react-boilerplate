import { FETCH_STRINGS, FETCH_SUCCESS } from '../constants';

describe('FETCH_STRINGS', () => {
  it('should return the correct constant', () => {
    expect(FETCH_STRINGS).toEqual('FETCH_STRINGS');
  });
});

describe('FETCH_SUCCESS', () => {
  it('should return the correct constant', () => {
    expect(FETCH_SUCCESS).toEqual('FETCH_SUCCESS');
  });
});
