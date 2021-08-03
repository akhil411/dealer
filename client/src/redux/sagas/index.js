import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import applicationSaga from './applicationSaga';

export default function* rootSaga() {
    yield all([
        userSaga(),
        applicationSaga(),
    ]);
}