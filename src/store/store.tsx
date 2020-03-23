import { createStore, applyMiddleware, compose, Store } from "redux";
import rootReducer from "./rootReducer";
import ReduxThunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

// ------------------------------USE THIS FOR REDUX PERSIST ----------------------//
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["session"]
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
//   ? window.__REDUX_DEVTOOLS_EXTENSION__()
//   : x => x;

// const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

// const store = createStore(persistedReducer, enhancer);
// const persistor = persistStore(store);

// export { store, persistor };

// ------------------------------- USE THIS FOR STORE WITHOUT PERSIST ---------------------//

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x: any) => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const store: Store = createStore(rootReducer, enhancer);

export { store };
