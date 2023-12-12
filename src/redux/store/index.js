import { createStore, applyMiddleware, compose } from "redux";
//import { persistStore, persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage/session";
//import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import {thunk} from "redux-thunk";
//import { logger } from "redux-logger";
import rootReducer from "../reducers";

// const persistConfig = {
//   key: "root",
//   storage: storage,
//   stateReconciler: autoMergeLevel2
// };

//const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

//export const persistor = persistStore(store);
