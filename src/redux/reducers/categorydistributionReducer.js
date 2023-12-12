import {
    CATEGORY_DISTRIBUTION_SUCCESS,
    CATEGORY_DISTRIBUTION_FAILED,
    LOADING_CATEGORY_DISTRIBUTION,
    RESET_CATEGORY_DISTRIBUTION,
} from "../types";

const initialState = {
    isLoading: false,
    success: false,
    failed: false,
    data: {},
};


export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_CATEGORY_DISTRIBUTION:
            return {
                ...state,
                isLoading: true,
                success: false,
                failed: false,
                data: {},
            };
        case CATEGORY_DISTRIBUTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                failed: false,
                data: action.payload,
            };
        case CATEGORY_DISTRIBUTION_FAILED:
            return {
                ...state,
                isLoading: false,
                success: false,
                failed: true,
                data: action.payload,
            };
        case RESET_CATEGORY_DISTRIBUTION:
            return (state = initialState);

        default:
            return state;
    }
};