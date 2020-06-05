import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { fetchStrings, updateStrings } from './requests';
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
    const list = yield call(fetchStrings);
    yield put({ type: FETCH_SUCCESS, list });
  } catch (error) {
    yield put({ type: FETCH_FAILURE, error });
  }
}

export function* watchFetchStrings() {
  yield takeLatest(FETCH_STRINGS, fetchAllStrings);
}

export function* addNewString(action) {
  try {
    const updated = yield updateStrings(action.payload);
    yield put({ type: UPDATE_SUCCESS, updated });
  } catch (error) {
    yield put({ type: UPDATE_FAILED, error });
  }
}

export function* watchUpdatingStrings() {
  yield takeEvery(UPDATING_STRINGS, addNewString);
}

export function* rootSaga() {
  yield all([watchFetchStrings(), watchUpdatingStrings()]);
}
