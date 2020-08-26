import * as actionTypes from './actionTypes';

export const approved = (response) => {
    return {
        type: actionTypes.APP_APPROVED,
        response: response
    };
};

export const denied = (response) => {
    return {
        type: actionTypes.APP_DECLINED,
        response: response
    };
};

export const responseAction = (response, history) => {
    return dispatch => {
        if (response.qualified === true) {
            dispatch(approved(response));
            history.push('/create-account');
        }
        else {
            dispatch(denied(response));
            history.push('/declined');
        }
    }
};