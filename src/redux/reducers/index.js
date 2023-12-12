import { combineReducers } from "redux";
import insightsummaryReducer from "./insightsummaryReducer";
import categorydistributionReducer from './categorydistributionReducer';
import responsetimesReducer from './responsetimesReducer';
import usagestatisticsReducer from './usagestatisticsReducer';
import usersatisfactionReducer from './usersatisfactionReducer';

export default combineReducers({
    insightsumm : insightsummaryReducer,
    categorydist: categorydistributionReducer,
    resptimes: responsetimesReducer,
    usagestats: usagestatisticsReducer,
    usersatis: usersatisfactionReducer,
});