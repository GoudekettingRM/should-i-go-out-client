import { Answer, Answers } from "../types/answer";

export const positiveAnswers: string[] = [
  "yes",
  "ja",
  "yes, by myself or with people I live with",
  "ja, alleen of alleen met mensen die bij je in huis wonen"
];

export const negativeAnswers: string[] = [
  "no",
  "nee",
  "no, with others",
  "nee, ook met andere mensen"
];

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
