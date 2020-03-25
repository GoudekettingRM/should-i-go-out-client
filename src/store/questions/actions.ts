import { SET_CURRENT_QUESTION, SET_ALL_QUESTIONS } from "./types";
import { AppActions } from "../appActions";
// import { questions } from "./allTestQuestions";
import { Question } from "../../types/question";
import { generateError } from "../../helper-files/generateError";
import { store } from "../store";

export const setCurrentQuestionActionCreator = (
  questionNumber: number
): AppActions => {
  const questions = store.getState().questions.all;
  const currentQuestion: Question | undefined = questions.find(
    question => question.questionNumber === questionNumber
  );
  if (currentQuestion) {
    return {
      type: SET_CURRENT_QUESTION,
      payload: currentQuestion
    };
  } else {
    throw generateError("Question does not exist", 404);
  }
};

export const setAllQuestionsActionCreator = (
  allQuestions: Question[]
): AppActions => {
  return {
    type: SET_ALL_QUESTIONS,
    payload: allQuestions
  };
};
