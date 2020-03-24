import { answers, Answer } from "../store/answer/allTestAnswers";

export const determineConclusion = (
  finalQuestionAnswer: string,
  finalQuestionId: number
): Answer => {
  if (
    (finalQuestionId === 5 &&
      finalQuestionAnswer === "nee, ook met andere mensen") ||
    (finalQuestionId === 7 && finalQuestionAnswer === "ja") ||
    (finalQuestionId === 9 && finalQuestionAnswer === "ja")
  )
    return answers.stayIn;

  if (finalQuestionId === 8 && finalQuestionAnswer === "ja")
    return answers.youHero;

  if (
    (finalQuestionId === 2 && finalQuestionAnswer === "ja") ||
    (finalQuestionId === 3 && finalQuestionAnswer === "ja") ||
    (finalQuestionId === 7 && finalQuestionAnswer === "nee")
  )
    return answers.goAlone;

  if (
    finalQuestionId === 5 &&
    finalQuestionAnswer ===
      "ja, alleen of alleen met mensen die bij je in huis wonen"
  )
    return answers.avoidOthers;

  if (finalQuestionId === 6 && finalQuestionAnswer === "ja")
    return answers.caretaker;

  if (finalQuestionId === 9 && finalQuestionAnswer === "nee")
    return answers.youShouldKnowBetter;

  return answers.stayIn;
};
