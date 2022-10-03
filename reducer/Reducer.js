import changestate from "./Incdec";
import {combineReducers} from "redux"
const rootReducer =combineReducers({
    changestate : changestate
})

export default rootReducer;