import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILUR } from "./consts";


export function asyncActionRequest(){
    return{
        type:FETCH_REQUEST
    }
}

export function asyncActionSuccess(){
    return{
        type:FETCH_SUCCESS
    }
}

export function asyncActionFailur(){
    return{
        type:FETCH_FAILUR
    }
}