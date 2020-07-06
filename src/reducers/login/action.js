import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from './const';
import Axios from 'axios';



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
export function loginFail(err) {
  return {
    type: LOGIN_FAIL,
    err
  }
}

