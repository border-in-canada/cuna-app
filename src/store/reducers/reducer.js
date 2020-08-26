import * as actionTypes from '../actions/actionTypes';

const initialState = {
    message: '',
    approved: true
};

const appApproved = (state, action) => {
    return (state, {
        message: action.message,
        approved: action.qualified
    })
};

const appDeclined = (state, action) => {
    return (state, {
        message: action.message,
        approved: action.qualified
    })
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.APP_APPROVED: return appApproved(state, action);
        case actionTypes.APP_DECLINED: return appDeclined(state, action);
        default:
            return state;
    }
}

export default reducer;