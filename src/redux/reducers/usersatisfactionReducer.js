import {
    USER_SATISFACTION_SUCCESS,
    USER_SATISFACTION_FAILED,
    LOADING_USER_SATISFACTION,
    RESET_USER_SATISFACTION,
} from "../types";

const initialState = {
    isLoading: false,
    success: false,
    failed: false,
    data: {},
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_USER_SATISFACTION:
            return {
                ...state,
                isLoading: true,
                success: false,
                failed: false,
                data: {},
            };
        case USER_SATISFACTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                failed: false,
                data: action.payload,
            };
        case USER_SATISFACTION_FAILED:
            return {
                ...state,
                isLoading: false,
                success: false,
                failed: true,
                data: action.payload,
            };
        case RESET_USER_SATISFACTION:
            return (state = initialState);

        default:
            return state;
    }
};