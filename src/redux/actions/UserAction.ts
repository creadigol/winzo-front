import * as types from './types';


export const sinupRequest = (data:any) => {
    return async (dispatch: any) => {
      dispatch({
        type: types.SIGNUP_REQUEST,
        payload: {data}
      });
    };
  };
  export const sinupSuccess = (userdata : any) => {
    return {
        type: types.SIGNUP_SUCCESS,
        payload: { userdata }
    }
  }
  export const sinupFail = (message: any) => ({
    type: types.SIGNUP_FAIL,
    payload: { message }
  });

export const loginRequest = (data:any) => {
    return async (dispatch: any) => {
      dispatch({
        type: types.LOGIN_REQUEST,
        payload: {data}
      });
    };
  };
  export const loginSuccess = (userdata : any) => {
    return {
        type: types.LOGIN_SUCCESS,
        payload: { userdata }
    }
  }
  export const loginFail = (message: any) => ({
    type: types.LOGIN_FAIL,
    payload: { message }
  });
