import { SET_CURRENT_QUESTION } from "./types";
import { AppActions } from "../appActions";
import { questions } from "./allTestQuestions";
import { Question } from "../../types/question";

export const setCurrentQuestion = (questionNumber: number): AppActions => {
  const currentQuestion: Question | undefined = questions.find(
    question => question.questionNumber === questionNumber
  );

  if (currentQuestion) {
    return {
      type: SET_CURRENT_QUESTION,
      payload: currentQuestion
    };
  } else {
    throw "Question does not exist";
  }
};
