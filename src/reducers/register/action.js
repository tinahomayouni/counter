import { SUCCESS, LOADING, FAIL } from './const';



export function registerLoading(payload) {
  return {
    type: LOADING,
    payload
  }
}
export function registerSuccess(data) {
  return {
    type: SUCCESS,
    data
  }
}
export function registerFail(err) {
  return {
    type: FAIL,
    err
  }
}

