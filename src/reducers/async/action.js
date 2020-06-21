import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILUR } from "./consts";


export function asyncActionRequest(){
    return{
        type:FETCH_REQUEST,
        
    }
}

export function asyncActionSuccess(data){
    return{
        type:FETCH_SUCCESS,
        payload:data,
    }
}

export function asyncActionFailur (error){
    return{
        type:FETCH_FAILUR,
        payload:error
    }
}