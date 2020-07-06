import { SUCCESS, LOADING, FAIL } from "./const";

const initialStates = {
  name: '',
  password: '',
  loading: false,
  data: [],
  err: ''
}



function registerReducer(state = initialStates, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        name: action.payload.name,
        password: action.payload.password,
      }
    case SUCCESS:
      return {
                ...state,
        loading: false,
        data: action.payload,
        err: ''
      }
    case FAIL:
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

export default registerReducer;