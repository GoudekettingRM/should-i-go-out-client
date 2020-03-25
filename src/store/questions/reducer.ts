import { Question } from "../../types/question";
import { AppActions } from "../appActions";
import { SET_CURRENT_QUESTION, SET_ALL_QUESTIONS } from "./types";

interface questionReducerState {
  all: Question[];
  current: Question;
}

const initialState: questionReducerState = {
  all: [],
  current: {
    questionNumber: 0,
    question: "",
    answers: []
  }
};

export const questionReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case SET_CURRENT_QUESTION: {
      return { ...state, current: action.payload };
    }
    case SET_ALL_QUESTIONS: {
      return {
        ...state,
        all: action.payload
      };
    }
    default:
      return state;
  }
};
