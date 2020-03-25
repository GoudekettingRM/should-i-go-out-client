import { AppActions } from "../appActions";
import { SET_ANSWER, SET_ALL_ANSWERS } from "./types";
import { Answer, Answers } from "../../types/answer";

interface ConclusionState {
  all: Answers;
  drawn: Answer;
}

const initialState: ConclusionState = {
  all: {
    stayIn: {
      id: 0,
      conclusion: "",
      explanation: ""
    },
    youHero: {
      id: 0,
      conclusion: "",
      explanation: ""
    },
    youShouldKnowBetter: {
      id: 0,
      conclusion: "",
      explanation: ""
    },
    caretaker: {
      id: 0,
      conclusion: "",
      explanation: ""
    },
    goAlone: {
      id: 0,
      conclusion: "",
      explanation: ""
    },
    avoidOthers: {
      id: 0,
      conclusion: "",
      explanation: ""
    }
  },
  drawn: { id: 0, explanation: "", conclusion: "" }
};

export const conclusionReducer = (
  state = initialState,
  action: AppActions
): ConclusionState => {
  switch (action.type) {
    case SET_ALL_ANSWERS: {
      const newDrawnConclusion: Answer | undefined = (Object.keys(
        action.payload
      ) as Array<keyof typeof action.payload>)
        .map(answer => action.payload[answer])
        .find(answer => answer.id === state.drawn.id);
      console.log("New drawn conclusion test", newDrawnConclusion);

      if (newDrawnConclusion) {
        return {
          ...state,
          all: action.payload,
          drawn: newDrawnConclusion
        };
      } else {
        return {
          ...state,
          all: action.payload
        };
      }
    }
    case SET_ANSWER: {
      return { ...state, drawn: action.payload };
    }
    default:
      return state;
  }
};
