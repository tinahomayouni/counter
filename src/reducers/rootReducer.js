import { combineReducers } from "redux";
import reducer from '../reducers/reducer'
import asyncReducer from "./async/reducer";
import registerReducer from "./register/reducer";

const rootReducer = combineReducers({
    reducer: reducer,
    asyncReducer: asyncReducer,
    registerReducer : registerReducer

})

export default rootReducer