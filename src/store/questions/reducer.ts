import { Question } from "../../types/question";
import { AppActions } from "../appActions";
import { SET_CURRENT_QUESTION, SET_ALL_QUESTIONS } from "./types";

interface QuestionReducerState {
  all: Question[];
  current: Question;
}

const initialState: QuestionReducerState = {
  all: [],
  current: {
    questionNumber: 0,
    question: "",
    answers: []
  }
};

export const questionReducer = (
  state = initialState,
  action: AppActions
): QuestionReducerState => {
  switch (action.type) {
    case SET_CURRENT_QUESTION: {
      return { ...state, current: action.payload };
    }
    case SET_ALL_QUESTIONS: {
      const newCurrentQuestion: Question | undefined = action.payload.find(
        question => question.questionNumber === state.current.questionNumber
      );
      if (newCurrentQuestion) {
        return {
          ...state,
          all: action.payload,
          current: newCurrentQuestion
        };
      } else
        return {
          ...state,
          all: action.payload
        };
    }
    default:
      return state;
  }
};
