import {
    RESPONSE_TIMES_SUCCESS,
    RESPONSE_TIMES_FAILED,
    LOADING_RESPONSE_TIMES,
    RESET_RESPONSE_TIMES,
} from "../types";

const initialState = {
    isLoading: false,
    success: false,
    failed: false,
    data: {},
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_RESPONSE_TIMES:
            return {
                ...state,
                isLoading: true,
                success: false,
                failed: false,
                data: {},
            };
        case RESPONSE_TIMES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                failed: false,
                data: action.payload,
            };
        case RESPONSE_TIMES_FAILED:
            return {
                ...state,
                isLoading: false,
                success: false,
                failed: true,
                data: action.payload,
            };
        case RESET_RESPONSE_TIMES:
            return (state = initialState);

        default:
            return state;
    }
};