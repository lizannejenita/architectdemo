import {
    INSIGHT_SUMMARY_SUCCESS,
    INSIGHT_SUMMARY_FAILED,
    LOADING_INSIGHT_SUMMARY,
    RESET_INSIGHT_SUMMARY,
} from "../types";

const initialState = {
    isLoading: false,
    success: false,
    failed: false,
    data: {},
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_INSIGHT_SUMMARY:
            return {
                ...state,
                isLoading: true,
                success: false,
                failed: false,
                data: {},
            };
        case INSIGHT_SUMMARY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                failed: false,
                data: action.payload,
            };
        case INSIGHT_SUMMARY_FAILED:
            return {
                ...state,
                isLoading: false,
                success: false,
                failed: true,
                data: action.payload,
            };
        case RESET_INSIGHT_SUMMARY:
            return (state = initialState);

        default:
            return state;
    }
};