import axios from "axios";
import {
    RESPONSE_TIMES_SUCCESS,
    RESPONSE_TIMES_FAILED,
    LOADING_RESPONSE_TIMES,
    RESET_RESPONSE_TIMES,
} from "../types";

const resetresponseTimes = () => {
    return {
        type: RESET_RESPONSE_TIMES,
    };
};

const responseTimes = (userData) => (dispatch) => {
    dispatch({ type: LOADING_RESPONSE_TIMES });

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
        .catch((err) => { dispatch({ type: RESPONSE_TIMES_FAILED, payload: err }); });
};

function success(data) {
    return {
        type: RESPONSE_TIMES_SUCCESS,
        payload: data,
    };
}

function failed(data) {
    return {
        type: RESPONSE_TIMES_FAILED,
        payload: data,
    };
}

export { resetresponseTimes, responseTimes };