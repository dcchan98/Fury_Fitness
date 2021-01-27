/** @format */

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user-reducer";
import foodReducer from "./food/food-reducer";

const persistConfig = {
	key: "root",
	storage,
	// array to contain what to persist
	whitelist: ["user", "food"],
};

const rootReducer = combineReducers({ user: userReducer, food: foodReducer });

export default persistReducer(persistConfig, rootReducer);
