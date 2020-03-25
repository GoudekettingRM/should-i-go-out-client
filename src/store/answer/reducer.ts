import { AppActions } from "../appActions";
import { SET_ANSWER } from "./types";
import { Answer } from "./allTestAnswers";

interface ConclusionState {
  all: Answer[];
  drawn: Answer;
}

const initialState: ConclusionState = {
  all: [],
  drawn: { explanation: "", conclusion: "" }
};

export const conclusionReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case SET_ANSWER: {
      return { ...state, drawn: action.payload };
    }
    default:
      return state;
  }
};
