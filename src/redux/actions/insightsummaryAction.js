import axios from "axios";
import {
    INSIGHT_SUMMARY_SUCCESS,
    INSIGHT_SUMMARY_FAILED,
    LOADING_INSIGHT_SUMMARY,
    RESET_INSIGHT_SUMMARY,
} from "../types";

const resetinsightSummary = () => {
    return {
        type: RESET_INSIGHT_SUMMARY,
    };
};

const insightSummary = (userData) => (dispatch) => {
    dispatch({ type: LOADING_INSIGHT_SUMMARY });

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
        .catch((err) => { dispatch({ type: INSIGHT_SUMMARY_FAILED, payload: err }); });
};

function success(data) {
    return {
        type: INSIGHT_SUMMARY_SUCCESS,
        payload: data,
    };
}

function failed(data) {
    return {
        type: INSIGHT_SUMMARY_FAILED,
        payload: data,
    };
}

export { resetinsightSummary, insightSummary };