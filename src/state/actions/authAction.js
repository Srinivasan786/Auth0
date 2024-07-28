import { put, takeLatest } from 'redux-saga/effects';

function* loginSaga(action) {

  try {
    yield put({ type: 'LOGIN_SUCCESS', payload: action.payload });
    action.navigation('/welcome');
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE', payload: { error } });
  }
}

export function* watchLogin() {
  yield takeLatest('LOGIN_REQUEST', loginSaga);
}

