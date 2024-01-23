import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import rootReducer from "../reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const pReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(pReducer, applyMiddleware(thunk, logger));
export const store = createStore(pReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
