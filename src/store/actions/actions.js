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