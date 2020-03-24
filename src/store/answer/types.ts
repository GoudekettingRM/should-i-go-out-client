export const SET_ANSWER = "answer/SET_ANSWER";

export interface SetAnswerAction {
  type: typeof SET_ANSWER;
  payload: string;
}

export type AnswerActionTypes = SetAnswerAction;
