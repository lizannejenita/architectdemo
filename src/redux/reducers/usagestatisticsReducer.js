import {
    USAGE_STATISTICS_SUCCESS,
    USAGE_STATISTICS_FAILED,
    LOADING_USAGE_STATISTICS,
    RESET_USAGE_STATISTICS,
} from "../types";

const initialState = {
    isLoading: false,
    success: false,
    failed: false,
    data: {},
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_USAGE_STATISTICS:
            return {
                ...state,
                isLoading: true,
                success: false,
                failed: false,
                data: {},
            };
        case USAGE_STATISTICS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                failed: false,
                data: action.payload,
            };
        case USAGE_STATISTICS_FAILED:
            return {
                ...state,
                isLoading: false,
                success: false,
                failed: true,
                data: action.payload,
            };
        case RESET_USAGE_STATISTICS:
            return (state = initialState);

        default:
            return state;
    }
};