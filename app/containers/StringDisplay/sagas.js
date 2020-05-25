import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { fetchStrings, updateStrings } from './actions';
import {
  FETCH_STRINGS,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  UPDATING_STRINGS,
  UPDATE_FAILED,
  UPDATE_SUCCESS,
} from './constants';

export function* fetchAllStrings() {
  try {
    const strings = yield call(fetchStrings);
    yield put({ type: FETCH_SUCCESS, strings });
  } catch (error) {
    yield put({ type: FETCH_FAILURE, error });
  }
}

export function* watchFetchStrings() {
  yield takeLatest(FETCH_STRINGS, fetchAllStrings);
}

export function* addNewString(action) {
  try {
    const newString = yield updateStrings(action.payload);
    yield put({ type: UPDATE_SUCCESS, newString });
  } catch (error) {
    yield put({ type: UPDATE_FAILED });
  }
}

export function* watchUpdatingStrings() {
  yield takeEvery(UPDATING_STRINGS, addNewString);
}

export function* rootSaga() {
  yield all([watchFetchStrings(), watchUpdatingStrings()]);
}
