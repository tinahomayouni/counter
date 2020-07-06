import { combineReducers } from "redux";
import reducer from '../reducers/reducer'
import asyncReducer from "./async/reducer";
import loginReducer from "./login/reducer";

const rootReducer = combineReducers({
    reducer: reducer,
    asyncReducer: asyncReducer,
    loginReducer: loginReducer

})

export default rootReducer