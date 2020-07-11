import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL } from "../register/const"

export function register(payload) {
  return {
    type: REGISTER,
    payload
  }
}

export function registerSuccess(data) {
  return {
    type: REGISTER_SUCCESS,
    data
  }
}

export function registerFail(err) {
  return {
    type: REGISTER_FAIL,
    err
  }
}