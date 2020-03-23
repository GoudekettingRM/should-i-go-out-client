import { Question } from "../../types/question";
import { AppActions } from "../appActions";
import { SET_CURRENT_QUESTION } from "./types";

interface QuestionStateType {
  all: Question[];
  current: Question;
}

const initialState: QuestionStateType = {
  all: [],
  current: { questionNumber: null, question: "", answers: [] }
};

export const questionReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case SET_CURRENT_QUESTION: {
      return {
        ...state,
        current: action.payload
      };
    }
    default:
      return state;
  }
};
