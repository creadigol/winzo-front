import { all } from 'redux-saga/effects';
import usersaga from "./UserSaga";
export default function* sagas() {
    yield all([
        usersaga()
    ]);
}
