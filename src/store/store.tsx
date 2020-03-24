import { createStore, applyMiddleware, compose, StoreEnhancer } from "redux";
import { rootReducer, AppState } from "./rootReducer";
import ReduxThunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from "./appActions";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x: any) => x;

const enhancer: StoreEnhancer = compose(
  applyMiddleware(ReduxThunk as ThunkMiddleware<AppState, AppActions>),
  devTools
);

const store = createStore(rootReducer, enhancer);

export { store };
