import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILUR } from "./consts";

const asyncInitialState = {
    loading: false,
    data: [],
    error: ''
}

export function asyncReducer(state = asyncInitialState, action) {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: '',
            }
        case FETCH_FAILUR:
            return {
                loading: false,
                data: [],
                error: action.error,
            }
        default:
            return state
    }
}

export default asyncReducer;