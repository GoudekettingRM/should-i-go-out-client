import { answers, Answer } from "../store/answer/allTestAnswers";

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
  finalQuestionId: number
): Answer => {
  if (
    (finalQuestionId === 5 && negativeAnswers.includes(finalQuestionAnswer)) ||
    (finalQuestionId === 7 && positiveAnswers.includes(finalQuestionAnswer)) ||
    (finalQuestionId === 9 && positiveAnswers.includes(finalQuestionAnswer))
  )
    return answers.stayIn;

  if (finalQuestionId === 8 && positiveAnswers.includes(finalQuestionAnswer))
    return answers.youHero;

  if (
    (finalQuestionId === 2 && positiveAnswers.includes(finalQuestionAnswer)) ||
    (finalQuestionId === 3 && positiveAnswers.includes(finalQuestionAnswer)) ||
    (finalQuestionId === 7 && negativeAnswers.includes(finalQuestionAnswer))
  )
    return answers.goAlone;

  if (finalQuestionId === 5 && positiveAnswers.includes(finalQuestionAnswer))
    return answers.avoidOthers;

  if (finalQuestionId === 6 && positiveAnswers.includes(finalQuestionAnswer))
    return answers.caretaker;

  if (finalQuestionId === 9 && negativeAnswers.includes(finalQuestionAnswer))
    return answers.youShouldKnowBetter;

  return answers.stayIn;
};
