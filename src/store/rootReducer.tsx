import { combineReducers } from "redux";
import { questionReducer } from "./questions/reducer";

export const rootReducer = combineReducers({ questions: questionReducer });

export type AppState = ReturnType<typeof rootReducer>;
