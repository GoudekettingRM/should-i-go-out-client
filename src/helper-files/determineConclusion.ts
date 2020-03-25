import { Answer, Answers } from "../types/answer";
import {
  positiveAnswers,
  negativeAnswers
} from "../translations/pos-neg-answers";

export const determineConclusion = (
  finalQuestionAnswer: string,
  finalQuestionId: number,
  allAnswers: Answers
): Answer => {
  if (
    (finalQuestionId === 5 && negativeAnswers.includes(finalQuestionAnswer)) ||
    (finalQuestionId === 7 && positiveAnswers.includes(finalQuestionAnswer)) ||
    (finalQuestionId === 9 && positiveAnswers.includes(finalQuestionAnswer))
  )
    return allAnswers.stayIn;

  if (finalQuestionId === 8 && positiveAnswers.includes(finalQuestionAnswer))
    return allAnswers.youHero;

  if (
    (finalQuestionId === 2 && positiveAnswers.includes(finalQuestionAnswer)) ||
    (finalQuestionId === 3 && positiveAnswers.includes(finalQuestionAnswer)) ||
    (finalQuestionId === 7 && negativeAnswers.includes(finalQuestionAnswer))
  )
    return allAnswers.goAlone;

  if (finalQuestionId === 5 && positiveAnswers.includes(finalQuestionAnswer))
    return allAnswers.avoidOthers;

  if (finalQuestionId === 6 && positiveAnswers.includes(finalQuestionAnswer))
    return allAnswers.caretaker;

  if (finalQuestionId === 9 && negativeAnswers.includes(finalQuestionAnswer))
    return allAnswers.youShouldKnowBetter;

  return allAnswers.stayIn;
};
