import { Answer } from "./allTestAnswers";

export const SET_ANSWER = "answer/SET_ANSWER";

export interface SetAnswerAction {
  type: typeof SET_ANSWER;
  payload: Answer;
}

export type AnswerActionTypes = SetAnswerAction;
