import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from './const';

export function login(payload) {
  return {
    type: LOGIN,
    payload
  }
}
export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data
  }
}
export function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    error
  }
}

