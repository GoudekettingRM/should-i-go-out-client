import { combineReducers } from "redux";
import { questionReducer } from "./questions/reducer";
import { answerReducer } from "./answer/reducer";

export const rootReducer = combineReducers({
  currentQuestion: questionReducer,
  answer: answerReducer
});

export type AppState = ReturnType<typeof rootReducer>;
