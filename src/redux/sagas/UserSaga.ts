import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as UserAction from "./../actions/UserAction";
import * as UserService from "../services/UserService";

export function* loginRequest(action: any): Generator<any> {
    try {
      const params = action.payload;
      const res: any = yield call(UserService.loginReq, params);
      if (res.data) {
        yield put(UserAction.loginSuccess(res.success));
      } else {
        yield put(UserAction.loginFail(res)); // deepscan-disable-line
      }
    } catch (error) {
      yield put(UserAction.loginFail(error));
    }
  }
  export default function* watchAuthRequests() {
    yield takeEvery(types.LOGIN_REQUEST, loginRequest);
  }