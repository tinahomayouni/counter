import { combineReducers } from "redux";
import reducer from './reducer'
import asyncReducer from "./async/reducer";
import loginReducer from "./login/reducer";
import registerReducer from "./register/reducer";

const rootReducer = combineReducers({
    reducer: reducer,
    asyncReducer: asyncReducer,
    loginReducer: loginReducer,
    registerReducer: registerReducer

})

export default rootReducer