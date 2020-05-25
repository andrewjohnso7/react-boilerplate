import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchStrings } from './actions';
import { API_SUCCESS, API_FAILURE, FETCH_STRINGS } from './constants';

export function* fetchAllStrings() {
  try {
    console.log('to call the right things');
    const strings = yield call(fetchStrings);
    yield put({ type: API_SUCCESS, data: strings });
  } catch (error) {
    yield put({ type: API_FAILURE, error });
  }
}

export function* watchFetchStrings() {
  yield takeLatest(FETCH_STRINGS, fetchAllStrings);
}

export function* rootSaga() {
  yield all([watchFetchStrings()]);
}
