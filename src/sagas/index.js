import { all, spawn } from 'redux-saga/effects';
import user from './user';
// import expenses from './expenses';

export default function* sagas() {
  return yield all([
    spawn(user),
    // spawn(expenses),
  ]);
}
