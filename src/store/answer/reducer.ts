import { AppActions } from "../appActions";
import { SET_ANSWER } from "./types";
import { Answer } from "./allTestAnswers";

const initialState: Answer = { explanation: "", conclusion: "" };

export const answerReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case SET_ANSWER: {
      return action.payload;
    }
    default:
      return state;
  }
};
