import { combineReducers } from "redux";
import galleryReducer from "./galleryReducer";
import ragisterReducer from './ragisterReducer'
import loginReducer from './loginReducers'


const rootReducer = combineReducers({
    galleryReducer,
    ragisterReducer,
    loginReducer
});

export default rootReducer;
