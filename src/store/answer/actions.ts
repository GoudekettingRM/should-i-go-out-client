import { SET_ANSWER, SET_ALL_ANSWERS } from "./types";
import { AppActions } from "../appActions";
import { Answer, Answers } from "../../types/answer";

export const setAnswerActionCreator = (answer: Answer): AppActions => {
  return {
    type: SET_ANSWER,
    payload: answer
  };
};

export const setAllAnswersActionCreator = (allAnswers: Answers): AppActions => {
  return {
    type: SET_ALL_ANSWERS,
    payload: allAnswers
  };
};
