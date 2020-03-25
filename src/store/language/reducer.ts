import { AppActions } from "../appActions";

const initialState: string = "nl";

export const languageReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    default:
      return state;
  }
};
