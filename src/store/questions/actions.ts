import { SET_CURRENT_QUESTION } from "./types";
import { AppActions } from "../appActions";
import { questions } from "./allTestQuestions";
import { Question } from "../../types/question";
import { generateError } from "../../helper-files/generateError";

export const setCurrentQuestionActionCreator = (
  questionNumber: number
): AppActions => {
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
