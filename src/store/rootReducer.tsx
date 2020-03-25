import { combineReducers } from "redux";
import { questionReducer } from "./questions/reducer";
import { conclusionReducer } from "./answer/reducer";
import { languageReducer } from "./language/reducer";

export const rootReducer = combineReducers({
  questions: questionReducer,
  conclusions: conclusionReducer,
  language: languageReducer
});

export type AppState = ReturnType<typeof rootReducer>;
