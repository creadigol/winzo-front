import { combineReducers } from 'redux';
import AppReducer, { appStateIF } from './AppReducer';
import UserReducer from "./UserReducer";
export interface ReducerStateIF {
    app: appStateIF;
}
export default combineReducers({
    app: AppReducer,
    user : UserReducer,
});
