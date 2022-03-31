import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";
import todolistSlice from "./todolistSlice";

const reducers = combineReducers({
  todo: todolistSlice,
});

const persistConfig = {
  key: "todos",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({ reducer: persistedReducer });

const persistor = persistStore(store);

export { store, persistor };
