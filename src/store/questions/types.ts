import { Question } from "../../types/question";

export const SET_CURRENT_QUESTION = "questions/SET_CURRENT_QUESTION";

export interface SetCurrentQuestionAction {
  type: typeof SET_CURRENT_QUESTION;
  payload: Question;
}

export type QuestionActionTypes = SetCurrentQuestionAction;
