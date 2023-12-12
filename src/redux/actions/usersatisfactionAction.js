import axios from "axios";
import {
    USER_SATISFACTION_SUCCESS,
    USER_SATISFACTION_FAILED,
    LOADING_USER_SATISFACTION,
    RESET_USER_SATISFACTION,
} from "../types";

const resetuserSatisfaction = () => {
    return {
        type: RESET_USER_SATISFACTION,
    };
};

const userSatisfaction = (userData) => (dispatch) => {
    dispatch({ type: LOADING_USER_SATISFACTION });

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
        .catch((err) => { dispatch({ type: USER_SATISFACTION_FAILED, payload: err }); });
};

function success(data) {
    return {
        type: USER_SATISFACTION_SUCCESS,
        payload: data,
    };
}

function failed(data) {
    return {
        type: USER_SATISFACTION_FAILED,
        payload: data,
    };
}

export { resetuserSatisfaction, userSatisfaction };