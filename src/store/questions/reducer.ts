import { Question } from "../../types/question";
import { AppActions } from "../appActions";
import { SET_CURRENT_QUESTION } from "./types";

const initialState: Question = {
  questionNumber: 0,
  question: "",
  answers: []
};

export const questionReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case SET_CURRENT_QUESTION: {
      return action.payload;
    }
    default:
      return state;
  }
};
