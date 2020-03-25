import { positiveAnswers, negativeAnswers } from "./determineConclusion";

export const determineNextQuestion = (
  givenAnswer: string,
  prevQuestionId: number
): number => {
  if (prevQuestionId === 1 && positiveAnswers.includes(givenAnswer)) return 8;
  if (prevQuestionId === 1 && negativeAnswers.includes(givenAnswer)) return 2;
  if (prevQuestionId === 2 && negativeAnswers.includes(givenAnswer)) return 3;
  if (prevQuestionId === 3 && negativeAnswers.includes(givenAnswer)) return 4;
  if (prevQuestionId === 4 && positiveAnswers.includes(givenAnswer)) return 5;
  if (prevQuestionId === 4 && negativeAnswers.includes(givenAnswer)) return 6;
  if (prevQuestionId === 6 && negativeAnswers.includes(givenAnswer)) return 7;
  if (prevQuestionId === 8 && negativeAnswers.includes(givenAnswer)) return 9;
  return 0;
};
