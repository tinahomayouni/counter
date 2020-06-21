import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILUR } from "./consts";

const asyncInitialState = {
    loading:false,
    data:[],
    error:''
}

function asyncReducer(state = asyncInitialState , action){
    switch(action.type){
        case FETCH_REQUEST:
           return{
            ...state,
            loading:true
           }
        break;
        case FETCH_SUCCESS:
            return{
            loading:false,
            data:action.payload,
            error:'',
            }
        break;
        case FETCH_FAILUR:
            return{
                loading:false,
                data:[],
                error:action.payload,
            }
        break;
    }
}