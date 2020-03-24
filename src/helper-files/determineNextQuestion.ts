export const determineNextQuestion = (
  givenAnswer: string,
  prevQuestionId: number
): number => {
  if (prevQuestionId === 1 && givenAnswer === "ja") return 8;
  if (prevQuestionId === 1 && givenAnswer === "nee") return 2;
  if (prevQuestionId === 2 && givenAnswer === "nee") return 3;
  if (prevQuestionId === 3 && givenAnswer === "nee") return 4;
  if (prevQuestionId === 4 && givenAnswer === "ja") return 5;
  if (prevQuestionId === 4 && givenAnswer === "nee") return 6;
  if (prevQuestionId === 6 && givenAnswer === "nee") return 7;
  if (prevQuestionId === 8 && givenAnswer === "nee") return 9;
  return 0;
};
