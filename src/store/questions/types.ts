import { Question } from "../../types/question";

export const SET_CURRENT_QUESTION = "questions/SET_CURRENT_QUESTION";
export const SET_ALL_QUESTIONS = "questions/SET_ALL_QUESTIONS";

export interface SetCurrentQuestionAction {
  type: typeof SET_CURRENT_QUESTION;
  payload: Question;
}

export interface SetAllQuestionsLanguage {
  type: typeof SET_ALL_QUESTIONS;
  payload: Question[];
}

export type QuestionActionTypes =
  | SetCurrentQuestionAction
  | SetAllQuestionsLanguage;
