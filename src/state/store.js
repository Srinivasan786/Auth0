import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { watchLogin } from './actions/authAction';
import authReducer  from './reducers/authReducer';

// Root reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

// Root saga
function* rootSaga() {
  yield all([
    watchLogin(),
  ]);
}

// Configure store function
export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
      applyMiddleware(
        sagaMiddleware,
      )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
