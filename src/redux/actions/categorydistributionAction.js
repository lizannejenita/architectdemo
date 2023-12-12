import axios from "axios";
import {
    CATEGORY_DISTRIBUTION_SUCCESS,
    CATEGORY_DISTRIBUTION_FAILED,
    LOADING_CATEGORY_DISTRIBUTION,
    RESET_CATEGORY_DISTRIBUTION,
} from "../types";

const resetcategoryDistribution = () => {
    return {
        type: RESET_CATEGORY_DISTRIBUTION,
    };
};

const categoryDistribution = (userData) => (dispatch) => {
    dispatch({ type: LOADING_CATEGORY_DISTRIBUTION });

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
        .catch((err) => { dispatch({ type: CATEGORY_DISTRIBUTION_FAILED, payload: err }); });
};

function success(data) {
    return {
        type: CATEGORY_DISTRIBUTION_SUCCESS,
        payload: data,
    };
}

function failed(data) {
    return {
        type: CATEGORY_DISTRIBUTION_FAILED,
        payload: data,
    };
}

export { resetcategoryDistribution, categoryDistribution };