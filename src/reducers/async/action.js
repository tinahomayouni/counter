import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILUR } from "./consts";
import Axios from "axios";


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

export function fetchData(){
    return (dispatch)=>{
        dispatch(asyncActionRequest)
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res =>{
                const users = res.data
                dispatch(asyncActionSuccess(users)) 
            })
            .catch(err=>{
                const error = error.message
                dispatch(asyncActionFailur(error)) 

            })

    }
}