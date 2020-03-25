import { combineReducers } from "redux";
import { questionReducer } from "./questions/reducer";
import { conclusionReducer } from "./answer/reducer";

export const rootReducer = combineReducers({
  questions: questionReducer,
  conclusions: conclusionReducer
});

export type AppState = ReturnType<typeof rootReducer>;
