import axios from "axios";
import {
    USAGE_STATISTICS_SUCCESS,
    USAGE_STATISTICS_FAILED,
    LOADING_USAGE_STATISTICS,
    RESET_USAGE_STATISTICS,
} from "../types";

const resetusageStatistics = () => {
    return {
        type: RESET_USAGE_STATISTICS,
    };
};

const usageStatistics = (userData) => (dispatch) => {
    dispatch({ type: LOADING_USAGE_STATISTICS });

    axios
        .get("../ai-data.json", userData, { headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         } })
        .then((res) => {
            if(Object.keys(res.data[userData])){
                dispatch(success(res.data[userData]));
            }
            else{
                dispatch(failed(res));
            }
        })
        .catch((err) => { dispatch({ type: USAGE_STATISTICS_FAILED, payload: err }); });
};

function success(data) {
    return {
        type: USAGE_STATISTICS_SUCCESS,
        payload: data,
    };
}

function failed(data) {
    return {
        type: USAGE_STATISTICS_FAILED,
        payload: data,
    };
}

export { resetusageStatistics, usageStatistics };