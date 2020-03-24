import { AppActions } from "../appActions";
import { SET_ANSWER } from "./types";

const initialState: string = "";

export const answerReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case SET_ANSWER: {
      return action.payload;
    }
    default:
      return state;
  }
};
