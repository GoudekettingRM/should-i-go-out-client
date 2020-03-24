import { SET_ANSWER } from "./types";
import { AppActions } from "../appActions";
import { Answer } from "./allTestAnswers";

export const setAnswerActionCreator = (answer: Answer): AppActions => {
  return {
    type: SET_ANSWER,
    payload: answer
  };
};
