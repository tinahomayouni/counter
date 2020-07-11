import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL } from "./const";

const initialRegisterState = {
  loading: false,
  data: [],
  err: '',
  formValue: {}
}

function registerReducer(state = initialRegisterState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        loading: true,
        formValue: action.payload
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        err: action.err

      }
    default:
      return {
        ...state
      }
  }
}

export default registerReducer;