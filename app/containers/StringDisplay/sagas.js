import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchStrings } from './actions';
import { API_SUCCESS, API_FAILURE, FETCH_STRINGS } from './constants';

export function* fetchAllStrings(action) {
  try {
    console.log('to call the right things');
    const strings = yield call(fetchStrings, action.payload);
    yield put({ type: API_SUCCESS, strings });
  } catch (error) {
    console.log('to call the wrong things');
    yield put({ type: API_FAILURE, error });
  }
}

export function* watchFetchStrings() {
  console.log('Trying');
  yield takeEvery(FETCH_STRINGS, fetchAllStrings);
}

export function* mySaga() {
  console.log('Hello From my saga');
}
