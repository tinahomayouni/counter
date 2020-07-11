import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "./const";

const initialLoginState = {
  name: '',
  password: '',
  loading: false,
  data: [],
  err: ''
}



function loginReducer(state = initialLoginState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        data: action.payload
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        err: ''
      }
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        err: action.error
      }
    default:
      return state
  }
}

export default loginReducer;