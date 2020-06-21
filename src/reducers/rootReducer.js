import { combineReducers } from "redux";
import reducer from '../reducers/reducer'
import asyncReducer from "./async/reducer";

const rootReducer = combineReducers({
    reducer: reducer,
    asyncReducer: asyncReducer,

})

export default rootReducer