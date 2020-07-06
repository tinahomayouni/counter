import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "./const";

const initialStates = {
  name: '',
  password: '',
  loading: false,
  data: [],
  err: ''
}



function loginReducer(state = initialStates, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        name: action.payload.name,
        password: action.payload.password,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        err: ''
      }
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        err: action.payload
      }
    default:
      return state
  }
}

export default loginReducer;