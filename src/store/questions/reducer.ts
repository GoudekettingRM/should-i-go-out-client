import { Question } from "../../types/question";
import { AppActions } from "../appActions";

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
    default:
      return state;
  }
};
