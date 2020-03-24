import { SET_ANSWER } from "./types";
import { AppActions } from "../appActions";

export const setAnswer = (answer: string): AppActions => {
  return {
    type: SET_ANSWER,
    payload: answer
  };
};
