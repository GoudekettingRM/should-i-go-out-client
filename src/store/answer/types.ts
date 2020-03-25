import { Answer, Answers } from "../../types/answer";

export const SET_ANSWER = "answer/SET_ANSWER";
export const SET_ALL_ANSWERS = "answer/SET_ALL_ANSWERS";

export interface SetAnswerAction {
  type: typeof SET_ANSWER;
  payload: Answer;
}

export interface SetAllAnswersAction {
  type: typeof SET_ALL_ANSWERS;
  payload: Answers;
}

export type AnswerActionTypes = SetAnswerAction | SetAllAnswersAction;
