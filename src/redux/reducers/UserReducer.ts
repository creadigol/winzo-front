import * as types from '../actions/types';
const initialState: any = {
    userdata : [],
};

const UserReducer = (state = initialState, action: any) => {
    
    switch (action.type) {
        
        case types.INIT_APP:
            return { ...state, ...action.payload, loader: false };
        case types.LOGIN_REQUEST:
            return { ...state, loader: true };
        case types.LOGIN_SUCCESS:
            return { ...state, loader: false, ...action.payload };
        case types.LOGIN_FAIL:
            return { ...state, loader: false , ...action.payload };
        case types.SIGNUP_REQUEST:
            return { ...state, loader: true , userdata:[]};
        case types.SIGNUP_SUCCESS:
            return { ...state, loader: false , ...action.payload};
        case types.SIGNUP_FAIL:
            return { ...state, loader: false , ...action.payload};    
        default:
            return state;
    }
};

export default UserReducer;

